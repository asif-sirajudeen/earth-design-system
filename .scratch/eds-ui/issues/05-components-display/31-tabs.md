# 31 — Tabs

**Group:** components-display

**What to build:** Tabs is exported from the package root as stock shadcn base-nova on Base UI, with stories, a smoke and axe test, and a thin docs page. Base UI props are verified against the docs.

**Blocked by:** 
- 11 — jsx-a11y lint, PR template and CODEOWNERS
- 12 — Docs app tracer: Fumadocs and Button page

**Status:** done

**Model:** `sonnet`

**Effort:** `medium`

- [x] Tabs imports from the package root and renders styled in a consuming app with the three app setup lines (`tailwindcss`, theme, styles).
- [x] Story file has a Default story with Controls and one story per shadcn variant and size of Tabs.
- [x] Smoke test renders the stories, logs no console errors, and axe reports no violations.
- [x] Docs page has the import line, one live example, local differences, an Open in Storybook link, and links to upstream shadcn and the Base UI API reference.
- [x] Fixture compile, sentinel and `ui:` checks pass on the fresh build.
