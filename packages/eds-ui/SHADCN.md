# shadcn scaffold notes

`components.json` is hand-written. Never run `shadcn init`.

- `init` generates project files and installs deps itself. This package already
  owns its manifest, tsconfig and CSS entry, so config is written by hand and
  `shadcn add` reads it directly.
- Bootstrap quirk: the CLI fails if `src/styles.css` is missing or empty. Seed it
  with `@import "tailwindcss";` before `shadcn add`.

## RSC must stay on (`"rsc": true`)

With RSC on, the CLI keeps `"use client"` on components that need it (Base UI
wrappers with state/effects) and drops it from pure ones. With RSC off it strips
the directive everywhere, which breaks the components in Next.js App Router
consumers. Do not flip it.

## Stylesheet trim (done once)

`shadcn add index` output was trimmed: removed `@layer base` (global `border`/`body`
styles must not leak into consumer apps, and use unprefixed utilities) and the
`chart-*` / `sidebar-*` tokens (no such components in v1). Do not re-add them.

## Pulling components

Components in `src/components/ui/` are stock CLI output. Do not hand-edit them.
Re-pull with:

```bash
pnpm exec shadcn add button input textarea label separator field checkbox radio-group switch select dialog alert-dialog tooltip popover dropdown-menu tabs alert badge avatar spinner toast --overwrite --yes
```

A re-pull must produce no diff. `src/index.ts` re-exports every component.

## Known prefix-transform defect (shadcn 4.23.0)

With `prefix: "ui"`, the CLI rewrites `after:content-['']` to
`ui:after:content-[]`, dropping the quotes. Tailwind emits no CSS for an empty
arbitrary value, so the two `::after` boxes in `toast.tsx` do not render (the
hover bridge between stacked toasts and the close button's enlarged hit area).
Without a prefix the CLI keeps the quotes. Source is left stock; ticket 36
(Toast) decides the fix.

## CSS build

`src/styles.css` is the Tailwind entry: theme and utilities imported with
`prefix(ui)`, no Preflight, `source(none)` plus `@source "./components"`. It
uses `tw-animate-css/prefix`, not `tw-animate-css`: the default entry reads
`var(--spacing)`, which does not exist under the prefix (it is `--ui-spacing`).
The `:root` / `.dark` values live in `src/themes/default.css`, which is copied
to `dist/themes/` as plain CSS. Re-pulls leave both files unchanged.

`@parcel/watcher` (a `@tailwindcss/cli` dependency) has `allowBuilds: false` in
`pnpm-workspace.yaml`: it is only used by `--watch` and ships prebuilt binaries.

One rule escapes layers and the prefix: `shadcn/tailwind.css` emits an
unlayered `@media (prefers-reduced-motion: reduce) { .shimmer {...} }`. It is
stock and left as is.

## `--radius-md` under the prefix

Stock `button.tsx` sizes `xs`, `sm`, `icon-xs` and `icon-sm` use
`rounded-[min(var(--radius-md),Npx)]`. With `prefix(ui)`, Tailwind's variable is
`--ui-radius-md`, and the reference inside the arbitrary value is not
rewritten. `styles.css` therefore defines a bare
`--radius-md: calc(var(--radius) * 0.8)` in `@layer theme`. It is layered on
purpose: an app's own Tailwind `--radius-md`, loaded after the package CSS,
wins, and the package never restyles the app's `rounded-md`.
