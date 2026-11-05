# 23 — RadioGroup with Field recipe

**Group:** components-form

**What to build:** RadioGroup is exported from the package root as stock shadcn base-nova on Base UI, with stories, a smoke and axe test, and a thin docs page. Labelling and descriptions use the documented Field, FieldLabel and FieldDescription recipe, not props.

**Blocked by:** 
- 21 — Field

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [ ] RadioGroup imports from the package root and renders styled in a consuming app using only the two prebuilt CSS files.
- [ ] Story file has a Default story with Controls and one story per shadcn variant and size of RadioGroup.
- [ ] Smoke test renders the stories, logs no console errors, and axe reports no violations.
- [ ] Docs page has the import line, one live example, local differences, an Open in Storybook link, and links to upstream shadcn and the Base UI API reference.
- [ ] Stylesheet coverage and prefix check passes on the fresh build.
- [ ] A recipe story and docs section show RadioGroup labelled with Field parts.
