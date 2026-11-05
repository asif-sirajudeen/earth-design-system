# 05 — JS and type build with tsdown

**Group:** base-setup

**What to build:** The package builds to unbundled ESM with type declarations, ready to pack.

**Blocked by:** 
- 04 — Pull all 20 components (no prefix)

**Status:** ready-for-agent (rework: CSS copy step)

**Model:** `opus`

**Effort:** `high`

- [x] One output file per component, ESM only, declarations included.
- [x] React, React DOM and Base UI stay external.
- [x] The `@/` aliases are rewritten in both JS and declarations, and `use client` is kept.
- [x] A build script runs from the workspace root.
- [ ] `tsdown.config.ts` copies `src/styles.css` and `src/shadcn.css` to `dist/` (it already copies `themes/default.css`). The build script is `tsdown` only; the Tailwind CLI step is removed.

**Reworked per wayfinder ticket 21** (`.wayfinder/tickets/21-css-distribution-reopen.md`, 2026-11-05): no prefix, no prebuilt utility CSS; the app's Tailwind compiles the package classes through `@source`.
