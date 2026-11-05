# 08 — Storybook and Vitest harness with Button smoke and axe test

**Group:** foundation

**What to build:** The maintainer can run Storybook on the source stylesheet and theme, toggle dark mode, and run a Vitest suite that renders the stories through the package root and checks them with axe. Button is the proof component.

**Blocked by:** 
- 07 — Package tracer: Button builds and imports from the tarball

**Status:** done

**Model:** `sonnet`

**Effort:** `high`

- [x] Storybook (React Vite) has core, docs and themes addons only, a dark-mode toolbar toggle that sets `.dark` on `<html>`, and autodocs.
- [x] Stories live outside the shipped source and use inline style for layout wrappers.
- [x] Button has a Default story with Controls and one story per variant and size.
- [x] Vitest with Testing Library in jsdom renders the stories via composed stories and project annotations.
- [x] Button smoke test passes with no console errors and no axe violations.
