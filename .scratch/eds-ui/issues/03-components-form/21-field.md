# 21 — Field

**Group:** components-form

**What to build:** Field is exported from the package root as stock shadcn base-nova on Base UI, with stories, a smoke and axe test, and a thin docs page. Field covers FieldLabel, FieldDescription and error parts.

**Blocked by:** 
- 19 — Label
- 20 — Separator

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [ ] Field imports from the package root and renders styled in a consuming app using only the two prebuilt CSS files.
- [ ] Story file has a Default story with Controls and one story per shadcn variant and size of Field.
- [ ] Smoke test renders the stories, logs no console errors, and axe reports no violations.
- [ ] Docs page has the import line, one live example, local differences, an Open in Storybook link, and links to upstream shadcn and the Base UI API reference.
- [ ] Stylesheet coverage and prefix check passes on the fresh build.
