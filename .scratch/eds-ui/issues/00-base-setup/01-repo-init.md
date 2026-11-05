# 01 — Repo init: git, public GitHub repo, pnpm workspace

**Group:** base-setup

**What to build:** The earth-design-system folder becomes a public git repo on the maintainer's personal GitHub account with a small pnpm workspace of two members: the package and the docs app. No turbo.

**Blocked by:** None — can start immediately

**Status:** ready-for-agent

**Model:** `haiku`

**Effort:** `low`

**Human step:** Create and push the public GitHub repo (outward-facing)

- [ ] Git repo initialised and pushed to a public GitHub repo on the personal account.
- [ ] pnpm workspace has the package workspace and the docs workspace; scripts use recursive pnpm commands.
- [ ] Root has tsconfig base, ignore file and a pinned Node LTS version.
- [ ] Existing `.wayfinder` planning files are kept out of the shipped package.
