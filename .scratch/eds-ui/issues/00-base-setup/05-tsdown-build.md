# 05 — JS and type build with tsdown

**Group:** base-setup

**What to build:** The package builds to unbundled ESM with type declarations, ready to pack.

**Blocked by:** 
- 04 — Pull all 20 components and verify the ui: prefix transform

**Status:** ready-for-agent

**Model:** `opus`

**Effort:** `high`

- [x] One output file per component, ESM only, declarations included.
- [x] React, React DOM and Base UI stay external.
- [x] The `@/` aliases are rewritten in both JS and declarations, and `use client` is kept.
- [x] A build script runs from the workspace root.
