# 49 — Vercel project and build order

**Group:** docs-hosting

**What to build:** One Vercel Hobby project serves docs, registry and Storybook from one origin, built on every push to main and every PR.

**Blocked by:** 
- 37 — @eds-ui registry manifest: 21 npm-pointer items
- 41 — registry:snapshot script
- 47 — Setup docs page

**Status:** ready-for-agent

**Model:** `opus`

**Effort:** `high`

**Human step:** Create the Vercel project and connect Git

- [ ] Project name availability is checked; if `eds-ui` is taken, the URL is updated everywhere.
- [ ] Build order: registry build, Storybook build, copy both into the docs static folder, then docs build.
- [ ] Paths served: docs, registry items, source items by version, and Storybook.
- [ ] Git integration builds production on main and previews on PRs, with no token in GitHub.
