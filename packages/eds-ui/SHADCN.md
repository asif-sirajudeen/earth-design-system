# shadcn scaffold notes

`components.json` is hand-written. Never run `shadcn init`.

- `init` generates project files and installs deps itself. This package already
  owns its manifest, tsconfig and CSS entry, so config is written by hand and
  `shadcn add` reads it directly.
- Bootstrap quirk: the CLI fails if `src/styles.css` is missing or empty. Seed it
  with any CSS line (e.g. `@import "tw-animate-css";`) before `shadcn add`.

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

One deliberate patch: `button.tsx` base classes use `rounded-[var(--radius-button)]` in place of `rounded-lg` (ticket 14). Re-apply it after a re-pull; `pnpm check:stylesheet` fails if it is missing. The same applies to the `positive` and `caution` variants in `alert.tsx` and `badge.tsx` (tickets 32, 33). Otherwise a re-pull must produce no diff. `src/index.ts` re-exports every component.

## CSS shipping

No prefix and no prebuilt utility CSS. `src/styles.css` is shipped unbuilt: the
consuming app's Tailwind v4 compiles the package classes through its
`@source "./components"` line. It does not import `tailwindcss`; the app does.
`src/shadcn.css` is a byte-identical copy of `shadcn/tailwind.css`.
`styles.css`, `shadcn.css` and `themes/default.css` are copied to `dist/` by
`tsdown.config.ts`, with no Tailwind step. Re-pulls leave them unchanged.

Refresh `src/shadcn.css` after any shadcn version bump or re-pull:

```bash
cp node_modules/shadcn/dist/tailwind.css src/shadcn.css
```

`@parcel/watcher` (a `@tailwindcss/cli` dependency) has `allowBuilds: false` in
`pnpm-workspace.yaml`: it is only used by `--watch` and ships prebuilt binaries.

One rule escapes layers: `shadcn.css` emits an unlayered
`@media (prefers-reduced-motion: reduce) { .shimmer {...} }`. It is stock and
left as is.
