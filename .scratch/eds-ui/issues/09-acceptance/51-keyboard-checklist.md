# 51 — Manual keyboard checklist for all 21 components

**Group:** acceptance

**What to build:** Keyboard support is checked where jsdom cannot, once for every component.

**Blocked by:** 
- 16 — Button recipes: loading and icon-only aria-label
- 17 — Input
- 18 — Textarea
- 19 — Label
- 20 — Separator
- 21 — Field
- 22 — Checkbox with Field recipe
- 23 — RadioGroup with Field recipe
- 24 — Switch with Field recipe
- 25 — Select with parts recipe
- 26 — Dialog
- 27 — AlertDialog
- 28 — Tooltip
- 29 — Popover
- 30 — DropdownMenu
- 31 — Tabs
- 32 — Alert with positive and caution variants
- 33 — Badge with positive and caution variants
- 34 — Avatar with status and size recipes
- 35 — Spinner
- 36 — Toast: Toaster and toast.add()

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

**Human step:** Manual keyboard pass in a browser

- [ ] Tab, Enter and Space, Esc, arrows and focus return are checked per component.
- [ ] Failures are logged as new tickets.
- [ ] Result is recorded.
