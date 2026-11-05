# 02 — Package skeleton: name, license, exports, dependencies

**Group:** base-setup

**What to build:** The package workspace has a publishable manifest matching the spec, with no source yet.

**Blocked by:** 
- 01 — Repo init: git, public GitHub repo, pnpm workspace

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `low`

- [ ] Name is `@asif-sirajudeen/eds-ui`, MIT, public publish access, ESM only.
- [ ] Exports are exactly the root, `styles.css` and `themes/default.css`; an `eds-ui` bin entry is reserved.
- [ ] Peers are React and React DOM ^19.0.0; dependencies are Base UI, class-variance-authority, cn, lucide-react.
- [ ] Dev dependencies hold Tailwind, tw-animate-css, tsdown, shadcn and test and lint tooling; apps never need Tailwind for the package.
- [ ] Versions are re-checked against the spec's version list.
