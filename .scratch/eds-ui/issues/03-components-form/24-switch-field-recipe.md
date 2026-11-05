# 24 — Switch with Field recipe

**Group:** components-form

**What to build:** Switch is exported from the package root as stock shadcn base-nova on Base UI, with stories, a smoke and axe test, and a thin docs page. Labelling and descriptions use the documented Field, FieldLabel and FieldDescription recipe, not props.

**Blocked by:** 
- 21 — Field

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [x] Switch imports from the package root and renders styled in a consuming app with the three app setup lines (`tailwindcss`, theme, styles).
- [x] Story file has a Default story with Controls and one story per shadcn variant and size of Switch.
- [x] Smoke test renders the stories, logs no console errors, and axe reports no violations.
- [x] Docs page has the import line, one live example, local differences, an Open in Storybook link, and links to upstream shadcn and the Base UI API reference.
- [x] Fixture compile, sentinel and `ui:` checks pass on the fresh build.
- [x] A recipe story and docs section show Switch labelled with Field parts.
