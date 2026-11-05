# 49 — Vercel project and build order

**Group:** docs-hosting

**What to build:** One Vercel Hobby project serves docs, registry and Storybook from one origin, built on every push to main and every PR.

**Blocked by:** 
- 37 — @eds-ui registry manifest: 21 npm-pointer items
- 41 — registry:snapshot script
- 47 — Setup docs page

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `high`

**Human step:** Create the Vercel project and connect Git

- [ ] Project name availability is checked; if `eds-ui` is taken, the URL is updated everywhere.
- [x] Build order: registry build, Storybook build, copy both into the docs static folder, then docs build.
- [x] Paths served (checked locally with `next start`): docs, registry items, source items by version, and Storybook.
- [ ] Git integration builds production on main and previews on PRs, with no token in GitHub.

Build is `scripts/site-build.mjs` (`pnpm build:site`), wired by `apps/docs/vercel.json`. In Vercel set Root Directory to `apps/docs`, leave "Include source files outside of the Root Directory" on, and connect Git. Name check and Git integration are the human step; both boxes stay open.
