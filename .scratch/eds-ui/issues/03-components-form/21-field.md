# 21 — Field

**Group:** components-form

**What to build:** Field is exported from the package root as stock shadcn base-nova on Base UI, with stories, a smoke and axe test, and a thin docs page. Field covers FieldLabel, FieldDescription and error parts.

**Blocked by:** 
- 19 — Label
- 20 — Separator

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [x] Field imports from the package root and renders styled in a consuming app with the three app setup lines (`tailwindcss`, theme, styles).
- [x] Story file has a Default story with Controls and one story per shadcn variant and size of Field.
- [x] Smoke test renders the stories, logs no console errors, and axe reports no violations.
- [x] Docs page has the import line, one live example, local differences, an Open in Storybook link, and links to upstream shadcn and the Base UI API reference.
- [x] Fixture compile, sentinel and `ui:` checks pass on the fresh build.
