# 32 — Alert with positive and caution variants

**Group:** components-display

**What to build:** Alert is exported from the package root as stock shadcn base-nova on Base UI, with stories, a smoke and axe test, and a thin docs page. Alert gains additive `positive` and `caution` variants; info maps to default and critical to destructive.

**Blocked by:** 
- 11 — jsx-a11y lint, PR template and CODEOWNERS
- 12 — Docs app tracer: Fumadocs and Button page
- 14 — Status colors and --radius-button theme variables

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [ ] Alert imports from the package root and renders styled in a consuming app using only the two prebuilt CSS files.
- [ ] Story file has a Default story with Controls and one story per shadcn variant and size of Alert.
- [ ] Smoke test renders the stories, logs no console errors, and axe reports no violations.
- [ ] Docs page has the import line, one live example, local differences, an Open in Storybook link, and links to upstream shadcn and the Base UI API reference.
- [ ] Stylesheet coverage and prefix check passes on the fresh build.
- [ ] `positive` and `caution` variants render their variant output, covered by a behaviour test.
- [ ] These are the only local source edits besides the theme; all other source stays identical to upstream.
