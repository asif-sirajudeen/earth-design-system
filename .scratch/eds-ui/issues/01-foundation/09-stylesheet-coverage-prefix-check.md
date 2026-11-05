# 09 — Fixture compile, sentinel selectors and ui: grep

**Group:** foundation

**What to build:** One script runs against a fresh build. It compiles a fixture entry holding the three app setup lines against the built package with the Tailwind CLI, and fails when a sentinel selector is missing or a `ui:` token is left in the component source.

**Blocked by:** 
- 07 — Package tracer: Button builds and imports from the tarball

**Status:** done

**Model:** `sonnet`

**Effort:** `medium`

- [x] The fixture compile output has about 10 sentinel selectors, for example `.bg-primary`, a `data-open:` rule with the vendored `:where([data-state="open"])` shape, `after:content-['']`, `rounded-[min(var(--radius-md),10px)]` and an `animate-in` rule.
- [x] The script fails on any `ui:` token in `src/components`.
- [x] The script is runnable with one package script after a build.
- [x] A deliberately broken case (the `@source` line removed, or a `ui:` token added) is shown to make the script fail.

**Reworked per wayfinder ticket 21** (`.wayfinder/tickets/21-css-distribution-reopen.md`, 2026-11-05): no prefix, no prebuilt utility CSS; the app's Tailwind compiles the package classes through `@source`.
