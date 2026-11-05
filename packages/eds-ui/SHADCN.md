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
