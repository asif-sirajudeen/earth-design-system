# 10 — PR CI workflow

**Group:** foundation

**What to build:** Every PR runs one workflow that builds and checks the package, so a broken build, story, registry or test fails before merge.

**Blocked by:** 
- 08 — Storybook and Vitest harness with Button smoke and axe test
- 09 — Stylesheet coverage and prefix check script

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [ ] Workflow runs install, typecheck, lint, build (JS then CSS), build-storybook, Vitest and the stylesheet coverage and prefix script on a single Node LTS.
- [ ] Registry validation is added to this workflow by the registry validate ticket.
- [ ] The workflow is the same for re-pull PRs; no extra jobs.
- [ ] A PR with a failing test or broken build is shown to fail the workflow.
