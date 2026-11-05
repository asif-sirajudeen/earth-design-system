# 07 — Package tracer: Button builds and imports from the tarball

**Group:** foundation

**What to build:** A consuming app can install the packed package, import Button from the package root, add `@import "tailwindcss"` then the package theme and styles, and see a correctly styled Button in light mode, compiled by the app's own Tailwind. This proves the base setup works end to end on one component.

**Blocked by:** 
- 05 — JS and type build with tsdown
- 06 — Prefixed Tailwind v4 CSS build and neutral theme file

**Status:** ready-for-agent

**Model:** `opus`

**Effort:** `high`

- [ ] Package root exports Button; Button comes from the components pulled in the base setup.
- [ ] Package exports are exactly the root, `styles.css` and `themes/default.css`; the tarball contains only build output.
- [ ] A throwaway pnpm app on Tailwind ^4.3 installs the packed tarball and renders Button correctly with the three setup lines and no `@source` line of its own.
- [ ] An app `className` override (`<Button className="bg-red-500">`) wins through `cn()`, and `.dark` on `<html>` switches the theme.

**Reworked per wayfinder ticket 21** (`.wayfinder/tickets/21-css-distribution-reopen.md`, 2026-11-05): no prefix, no prebuilt utility CSS; the app's Tailwind compiles the package classes through `@source`.
