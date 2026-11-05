# 12 — Docs app tracer: Fumadocs and Button page

**Group:** foundation

**What to build:** A Fumadocs app in the workspace renders a thin Button page with the import line, a live default example, an Open in Storybook link and links to upstream shadcn and Base UI. This fixes the page shape every component ticket reuses.

**Blocked by:** 
- 07 — Package tracer: Button builds and imports from the tarball
- 08 — Storybook and Vitest harness with Button smoke and axe test

**Status:** done

**Model:** `sonnet`

**Effort:** `high`

- [x] Docs app is private and ignored by changesets, with pages under the components path for each component.
- [x] Button page follows the thin-page shape: import line, one live example, local differences, recipes, Storybook link, upstream links, no copied prop tables.
- [x] Docs app uses the built package stylesheet and theme and renders dark mode.
- [x] Docs-only changes build without a package release.

## Comments

No changesets config exists yet (ticket 44); the docs package is `private`, so it never publishes. Add it to changesets `ignore` in that ticket. Docs build runs inside root `pnpm build` (workspace order builds eds-ui first), so CI covers it.
