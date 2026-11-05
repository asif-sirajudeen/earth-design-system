# 43 — CLI process-level test with a fixture registry

**Group:** registry-cli

**What to build:** The agent-facing CLI output is covered by one subprocess test against a local fixture registry.

**Blocked by:** 
- 42 — eds-ui CLI: list, search, view

**Status:** done

**Model:** `sonnet`

**Effort:** `high`

- [x] The bin can be pointed at a local fixture registry, and the pinned shadcn version is available to the subprocess in CI.
- [x] Test asserts `view` prints description then source.
- [x] Test checks list and search pass through.
- [x] Test runs in the PR workflow.
