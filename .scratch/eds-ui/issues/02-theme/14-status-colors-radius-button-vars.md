# 14 — Status colors and --radius-button theme variables

**Group:** theme

**What to build:** The theme gains `--positive`, `--positive-foreground`, `--caution`, `--caution-foreground` and `--radius-button`, in light and dark, so an app can override button roundness without touching inputs.

**Blocked by:** 
- 07 — Package tracer: Button builds and imports from the tarball

**Status:** done

**Model:** `sonnet`

**Effort:** `medium`

- [x] Four status variables added in oklch, green and amber hues, light and dark, mapped into the theme in the stock add-new-colors way.
- [x] `--radius-button` defaults to `var(--radius)` and Button uses it.
- [x] Theme does not set `--font-sans` and has no hover or pressed variables.
- [x] Overriding `--primary` and `--radius-button` after the theme import changes a Button: verified by compiling the fixture with overrides in `check:stylesheet` (CSS-level; default-size Button only, xs/sm/icon sizes keep stock radii).
