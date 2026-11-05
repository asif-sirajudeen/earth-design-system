# 50 — Check the build keeps committed source snapshots

**Group:** docs-hosting

**What to build:** The copy step in the Vercel build never removes committed version snapshots.

**Blocked by:** 
- 49 — Vercel project and build order

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [ ] After a deploy, an older version's source item is still served.
- [x] The copy step is changed if it removed them.

The copy step only replaces `public/storybook`, and `site-build.mjs` fails if the `public/r/src` version folders differ after the registry build. Checked locally: all 22 files of `0.1.0` survived. The post-deploy check (first box) waits on ticket 49's deploy.
