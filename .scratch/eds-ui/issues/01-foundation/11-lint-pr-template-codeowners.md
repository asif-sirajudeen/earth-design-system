# 11 — jsx-a11y lint, PR template and CODEOWNERS

**Group:** foundation

**What to build:** Package source is linted with jsx-a11y without editing stock component files, PRs use a checklist for re-pulls, and the maintainer owns every review.

**Blocked by:** 
- 10 — PR CI workflow

**Status:** done

**Model:** `sonnet`

**Effort:** `low`

- [x] `eslint-plugin-jsx-a11y` runs on package source; any rule that fires on unmodified stock source is turned off in config with a comment naming the component, no inline disables.
- [x] PR template has the re-pull checklist: diff run before overwrite, diff reviewed including registry dependencies, local edits re-applied, keyboard check, docs page checked, stories checked, contrast rerun if theme changed.
- [x] `CODEOWNERS` names the maintainer.
- [x] Lint runs in the PR workflow.
