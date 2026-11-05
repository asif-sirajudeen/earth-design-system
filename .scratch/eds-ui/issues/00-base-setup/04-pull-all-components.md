# 04 — Pull all 20 components and verify the ui: prefix transform

**Group:** base-setup

**What to build:** All 20 v1 components plus separator exist as stock base-nova source in the package, every class `ui:`-prefixed, imported from the `cn` package.

**Blocked by:** 
- 03 — shadcn scaffold: hand-written components.json and index

**Status:** ready-for-agent

**Model:** `opus`

**Effort:** `high`

- [x] All 21 exports are present as unmodified shadcn source; `use client` is kept where upstream has it.
- [x] Every class token is in the v4 `ui:` form, including variant strings, `cn()` arguments and arbitrary variants; no double prefixes.
- [x] Components import `cn` from shadcn's `cn` package with no tailwind-merge setup.
- [x] A root index re-exports every component.
- [x] Re-pull is shown to be idempotent: a second add with overwrite gives no diff.
