# 09 — Stylesheet coverage and prefix check script

**Group:** foundation

**What to build:** One script runs against a fresh build and fails when the built stylesheet lacks a rule for a `ui:` class used in the source, or when a source class is unprefixed or double-prefixed.

**Blocked by:** 
- 07 — Package tracer: Button builds and imports from the tarball

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [ ] Every `ui:` class token in the component source has a rule in the built stylesheet, except an allowlist of known no-CSS tokens.
- [ ] The script fails on any unprefixed class token and on any `ui:ui:` token.
- [ ] The script is runnable with one package script after a build.
- [ ] A deliberately broken fixture (unprefixed class) is shown to make the script fail.
