# 38 — setup registry item with CSS import order

**Group:** registry-cli

**What to build:** A `setup` item tells a developer or agent to import the theme, then the package styles, then Tailwind, and mentions the `eds-ui` CLI in one line.

**Blocked by:** 
- 37 — @eds-ui registry manifest: 21 npm-pointer items

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `low`

- [ ] `setup` item content gives the import order exactly: theme, package styles, `tailwindcss`.
- [ ] It carries one line on the `eds-ui` CLI.
- [ ] It builds with the rest of the registry.
