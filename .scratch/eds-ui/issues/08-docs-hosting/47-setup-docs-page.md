# 47 — Setup docs page

**Group:** docs-hosting

**What to build:** One page onboards a developer: install, peers, CSS import order, `.dark` on `<html>`, `<Toaster />`, theme overrides, registry config and the CLI.

**Blocked by:** 
- 38 — setup registry item with CSS import order
- 42 — eds-ui CLI: list, search, view

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [ ] Page covers every item in the spec's setup list.
- [ ] It gives the CSS order (`@import "tailwindcss"`, then `themes/default.css`, then `styles.css`), the `tailwindcss` ^4.3.0 peer, and that the app needs no `@source` line.
- [ ] It states that app `className` overrides win through `cn()`, that app Tailwind tokens restyle package components, and that the package's `--radius-*` mapping sets the app's `rounded-*` scale.
- [ ] TooltipProvider guidance from the Tooltip ticket is included.
- [ ] Page markdown is served for agents.

**Reworked per wayfinder ticket 21** (`.wayfinder/tickets/21-css-distribution-reopen.md`, 2026-11-05): no prefix, no prebuilt utility CSS; the app's Tailwind compiles the package classes through `@source`.
