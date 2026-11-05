# 37 — @eds-ui registry manifest: 21 npm-pointer items

**Group:** registry-cli

**What to build:** A hand-written shadcn-format manifest has one file-less item per export (21, separator included). `shadcn build` outputs the item JSON. A stray `shadcn add` only installs the npm package.

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

- [ ] 21 items with `dependencies` set to the package, a 4-line description and a `docs` field; no files, css, cssVars or registryDependencies; no theme item.
- [ ] Description line 1 is the root import naming every part (fits CLI search cut at about 80 characters), line 2 says npm package and how to read source, line 3 states the stock delta, line 4 the docs URL.
- [ ] Item JSON builds with `shadcn build`.
- [ ] Registry is public with no auth.
