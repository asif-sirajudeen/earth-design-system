# 06 — Prefixed Tailwind v4 CSS build and neutral theme file

**Group:** base-setup

**What to build:** The package builds `styles.css` with the `ui` prefix and ships the stock neutral theme as plain CSS variables.

**Blocked by:** 
- 04 — Pull all 20 components and verify the ui: prefix transform

**Status:** ready-for-agent

**Model:** `opus`

**Effort:** `high`

- [x] CSS entry imports Tailwind theme and utilities with prefix `ui`, no Preflight, the stock theme mapping and tw-animate-css, and scans only the component source.
- [x] Output keeps Tailwind v4's native layers; Tailwind theme variables are `--ui-*`.
- [x] Theme file has stock neutral values in oklch for `:root` and `.dark`, with bare shadcn variable names and no `--font-sans`.
- [x] Dark mode uses the `.dark` class only.
- [x] Theme file is copied to the build output with no Tailwind step; CSS build runs after the JS build.
