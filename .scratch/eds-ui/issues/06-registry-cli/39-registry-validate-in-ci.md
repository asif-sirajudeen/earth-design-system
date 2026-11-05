# 39 — registry validate in CI

**Group:** registry-cli

**What to build:** A broken registry fails the PR workflow.

**Blocked by:** 
- 37 — @eds-ui registry manifest: 21 npm-pointer items

**Status:** done

**Model:** `sonnet`

**Effort:** `low`

- [x] `registry validate` is added to the PR workflow.
- [x] A deliberately malformed item is shown to fail it.
