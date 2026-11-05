# 03 — shadcn scaffold: hand-written components.json and index

**Group:** base-setup

**What to build:** The package workspace is ready for the shadcn CLI without ever running `shadcn init`.

**Blocked by:** 
- 02 — Package skeleton: name, license, exports, dependencies

**Status:** done

**Model:** `sonnet`

**Effort:** `medium`

- [x] Hand-written shadcn config with style base-nova, RSC on, the CSS entry, an empty prefix (`tailwind.prefix: ""`) and aliases into the source.
- [x] `shadcn add index` is run once and its output reviewed.
- [x] The generated stylesheet is trimmed once to what the build needs.
- [x] A note records why init is not used and why RSC must stay on.

**Reworked per wayfinder ticket 21** (`.wayfinder/tickets/21-css-distribution-reopen.md`, 2026-11-05): no prefix, no prebuilt utility CSS; the app's Tailwind compiles the package classes through `@source`.
