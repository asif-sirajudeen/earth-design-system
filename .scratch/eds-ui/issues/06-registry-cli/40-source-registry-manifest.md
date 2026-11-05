# 40 — Source registry manifest with 21 source items

**Group:** registry-cli

**What to build:** A second, unlisted hand-written manifest lists 21 `registry:ui` items whose files are the component sources, so the CLI can print real source.

**Blocked by:** 
- 37 — @eds-ui registry manifest: 21 npm-pointer items

**Status:** done

**Model:** `sonnet`

**Effort:** `high`

- [x] `shadcn build` of this manifest outputs to a custom directory next to the main registry build; this is verified.
- [x] No consumer config names this registry.
- [x] Items are served under a versioned path.
