# 12 — Docs app tracer: Fumadocs and Button page

**Group:** foundation

**What to build:** A Fumadocs app in the workspace renders a thin Button page with the import line, a live default example, an Open in Storybook link and links to upstream shadcn and Base UI. This fixes the page shape every component ticket reuses.

**Blocked by:** 
- 07 — Package tracer: Button builds and imports from the tarball
- 08 — Storybook and Vitest harness with Button smoke and axe test

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `high`

- [ ] Docs app is private and ignored by changesets, with pages under the components path for each component.
- [ ] Button page follows the thin-page shape: import line, one live example, local differences, recipes, Storybook link, upstream links, no copied prop tables.
- [ ] Docs app uses the built package stylesheet and theme and renders dark mode.
- [ ] Docs-only changes build without a package release.
