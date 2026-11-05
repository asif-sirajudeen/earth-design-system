# 36 — Toast: Toaster and toast.add()

**Group:** components-display

**What to build:** Toast is exported from the package root as stock shadcn base-nova on Base UI, with stories, a smoke and axe test, and a thin docs page. One `<Toaster />` at the app root and an imperative `toast.add()`; EDS loading maps to type loading.

**Blocked by:** 
- 11 — jsx-a11y lint, PR template and CODEOWNERS
- 12 — Docs app tracer: Fumadocs and Button page

**Status:** done

**Model:** `sonnet`

**Effort:** `high`

- [x] Toast imports from the package root and renders styled in a consuming app with the three app setup lines (`tailwindcss`, theme, styles).
- [x] Story file has a Default story with Controls and one story per shadcn variant and size of Toast.
- [x] Smoke test renders the stories, logs no console errors, and axe reports no violations.
- [x] Docs page has the import line, one live example, local differences, an Open in Storybook link, and links to upstream shadcn and the Base UI API reference.
- [x] Fixture compile, sentinel and `ui:` checks pass on the fresh build.
- [x] Toast placement and duration config are verified against Base UI and documented.
- [x] Duplicate package copies in one bundle are noted as separate toast managers if confirmed.
- [x] The two `::after` boxes in `toast.tsx` (hover bridge, close-button hit area) render: `after:content-['']` keeps its quotes after the no-prefix re-pull in 04, with no source edit.

**Reworked per wayfinder ticket 21** (`.wayfinder/tickets/21-css-distribution-reopen.md`, 2026-11-05): no prefix, no prebuilt utility CSS; the app's Tailwind compiles the package classes through `@source`.
