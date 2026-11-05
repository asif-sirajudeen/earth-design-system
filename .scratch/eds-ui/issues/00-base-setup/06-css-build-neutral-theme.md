# 06 — Shipped `@source` CSS entry, vendored shadcn.css and neutral theme file

**Group:** base-setup

**What to build:** The package ships an unbuilt `styles.css` that the app's Tailwind v4 compiles, plus the stock neutral theme as plain CSS variables.

**Blocked by:** 
- 04 — Pull all 20 components (no prefix)

**Status:** ready-for-agent (rework: first done with prebuilt prefixed CSS)

**Model:** `opus`

**Effort:** `high`

- [ ] `src/styles.css` holds `@import "tw-animate-css"`, `@import "./shadcn.css"`, `@custom-variant dark (&:is(.dark *))`, the stock `@theme inline` mapping and `@source "./components"`. It does not import `tailwindcss`, has no `prefix(ui)`, no `@layer` order line and no `tw-animate-css/prefix`.
- [ ] `src/shadcn.css` is a byte-identical copy of `shadcn/tailwind.css` from the pinned shadcn CLI version.
- [ ] The d5d4372 `--radius-md` block is removed; `SHADCN.md` drops the prefix-defect, `tw-animate-css/prefix`, `--radius-md` and "ticket 36" notes and adds the `src/shadcn.css` refresh step to the re-pull procedure.
- [x] Theme file has stock neutral values in oklch for `:root` and `.dark`, with bare shadcn variable names and no `--font-sans`.
- [x] Dark mode uses the `.dark` class only.
- [ ] `styles.css`, `shadcn.css` and the theme file are copied to the build output with no Tailwind step.
- [ ] A scratch app with `@import "tailwindcss"`, then the theme, then `styles.css` compiles the package classes with no `@source` line of its own.

**Reworked per wayfinder ticket 21** (`.wayfinder/tickets/21-css-distribution-reopen.md`, 2026-11-05): no prefix, no prebuilt utility CSS; the app's Tailwind compiles the package classes through `@source`.
