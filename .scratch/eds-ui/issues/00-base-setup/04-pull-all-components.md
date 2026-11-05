# 04 — Pull all 20 components (no prefix)

**Group:** base-setup

**What to build:** All 20 v1 components plus separator exist as stock base-nova source in the package, with stock unprefixed classes, imported from the `cn` package.

**Blocked by:** 
- 03 — shadcn scaffold: hand-written components.json and index

**Status:** ready-for-agent (rework: first done with the `ui` prefix)

**Model:** `opus`

**Effort:** `high`

- [ ] All 21 exports are re-pulled with `--overwrite` after the prefix is set to `""`, as unmodified shadcn source; `use client` is kept where upstream has it.
- [ ] No `ui:` token remains in `src/components`, and `toast.tsx` has `after:content-['']` with its quotes. The git diff against the prefixed pull is the prefix removal only.
- [x] Components import `cn` from shadcn's `cn` package with no tailwind-merge setup.
- [x] A root index re-exports every component.
- [ ] Re-pull is shown to be idempotent: a second add with overwrite gives no diff.

**Reworked per wayfinder ticket 21** (`.wayfinder/tickets/21-css-distribution-reopen.md`, 2026-11-05): no prefix, no prebuilt utility CSS; the app's Tailwind compiles the package classes through `@source`.
