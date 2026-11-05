# 28 — Tooltip

**Group:** components-overlay

**What to build:** Tooltip is exported from the package root as stock shadcn base-nova on Base UI, with stories, a smoke and axe test, and a thin docs page. Decide and document whether consumers must mount a TooltipProvider.

**Blocked by:** 
- 11 — jsx-a11y lint, PR template and CODEOWNERS
- 12 — Docs app tracer: Fumadocs and Button page

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `high`

- [ ] Tooltip imports from the package root and renders styled in a consuming app with the three app setup lines (`tailwindcss`, theme, styles).
- [ ] Story file has a Default story with Controls and one story per shadcn variant and size of Tooltip.
- [ ] Smoke test renders the stories, opens the popup, logs no console errors, and axe reports no violations.
- [ ] Docs page has the import line, one live example, local differences, an Open in Storybook link, and links to upstream shadcn and the Base UI API reference.
- [ ] Fixture compile, sentinel and `ui:` checks pass on the fresh build.
- [ ] Popup renders in a portal and is dark when `.dark` is on `<html>`.
- [ ] TooltipProvider requirement is verified, and documented on the setup page content and Tooltip page.
