# 10 — PR CI workflow

**Group:** foundation

**What to build:** Every PR runs one workflow that builds and checks the package, so a broken build, story, registry or test fails before merge.

**Blocked by:** 
- 08 — Storybook and Vitest harness with Button smoke and axe test
- 09 — Fixture compile, sentinel selectors and ui: grep

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [ ] Workflow runs install, typecheck, lint, build (tsdown plus CSS copy), build-storybook, Vitest and the fixture compile, sentinel and `ui:` script on a single Node LTS.
- [ ] Registry validation is added to this workflow by the registry validate ticket.
- [ ] The workflow is the same for re-pull PRs; no extra jobs.
- [ ] A PR with a failing test or broken build is shown to fail the workflow.

**Reworked per wayfinder ticket 21** (`.wayfinder/tickets/21-css-distribution-reopen.md`, 2026-11-05): no prefix, no prebuilt utility CSS; the app's Tailwind compiles the package classes through `@source`.
