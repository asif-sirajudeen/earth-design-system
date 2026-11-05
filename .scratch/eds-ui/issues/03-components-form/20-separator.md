# 20 — Separator

**Group:** components-form

**What to build:** Separator is exported from the package root as stock shadcn base-nova on Base UI, with stories, a smoke and axe test, and a thin docs page. It is also what Field depends on.

**Blocked by:** 
- 11 — jsx-a11y lint, PR template and CODEOWNERS
- 12 — Docs app tracer: Fumadocs and Button page

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `low`

- [ ] Separator imports from the package root and renders styled in a consuming app with the three app setup lines (`tailwindcss`, theme, styles).
- [ ] Story file has a Default story with Controls and one story per shadcn variant and size of Separator.
- [ ] Smoke test renders the stories, logs no console errors, and axe reports no violations.
- [ ] Docs page has the import line, one live example, local differences, an Open in Storybook link, and links to upstream shadcn and the Base UI API reference.
- [ ] Fixture compile, sentinel and `ui:` checks pass on the fresh build.
