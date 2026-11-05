# 07 — Package tracer: Button builds and imports from the tarball

**Group:** foundation

**What to build:** A consuming app can install the packed package, import Button from the package root, load the two prebuilt CSS files before Tailwind, and see a correctly styled, `ui`-prefixed Button in light mode. This proves the base setup works end to end on one component.

**Blocked by:** 
- 05 — JS and type build with tsdown
- 06 — Prefixed Tailwind v4 CSS build and neutral theme file

**Status:** ready-for-agent

**Model:** `opus`

**Effort:** `high`

- [ ] Package root exports Button; Button comes from the components pulled in the base setup.
- [ ] Package exports are exactly the root, `styles.css` and `themes/default.css`; the tarball contains only build output.
- [ ] A throwaway app installs the packed tarball and renders Button correctly with the two CSS files imported before Tailwind.
- [ ] The app's own unprefixed classes win on overrides, and `.dark` on `<html>` switches the theme.
