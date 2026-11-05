# 43 — CLI process-level test with a fixture registry

**Group:** registry-cli

**What to build:** The agent-facing CLI output is covered by one subprocess test against a local fixture registry.

**Blocked by:** 
- 42 — eds-ui CLI: list, search, view

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `high`

- [ ] The bin can be pointed at a local fixture registry, and the pinned shadcn version is available to the subprocess in CI.
- [ ] Test asserts `view` prints description then source.
- [ ] Test checks list and search pass through.
- [ ] Test runs in the PR workflow.
