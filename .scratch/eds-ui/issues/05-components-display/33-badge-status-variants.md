# 33 — Badge with positive and caution variants

**Group:** components-display

**What to build:** Badge is exported from the package root as stock shadcn base-nova on Base UI, with stories, a smoke and axe test, and a thin docs page. Badge gains additive `positive` and `caution` variants; info maps to default and critical to destructive.

**Blocked by:** 
- 11 — jsx-a11y lint, PR template and CODEOWNERS
- 12 — Docs app tracer: Fumadocs and Button page
- 14 — Status colors and --radius-button theme variables

**Status:** done

**Model:** `sonnet`

**Effort:** `medium`

- [x] Badge imports from the package root and renders styled in a consuming app with the three app setup lines (`tailwindcss`, theme, styles).
- [x] Story file has a Default story with Controls and one story per shadcn variant and size of Badge.
- [x] Smoke test renders the stories, logs no console errors, and axe reports no violations.
- [x] Docs page has the import line, one live example, local differences, an Open in Storybook link, and links to upstream shadcn and the Base UI API reference.
- [x] Fixture compile, sentinel and `ui:` checks pass on the fresh build.
- [x] `positive` and `caution` variants render their variant output, covered by a behaviour test.
- [x] These are the only local source edits besides the theme; all other source stays identical to upstream.
