# 50 — Check the build keeps committed source snapshots

**Group:** docs-hosting

**What to build:** The copy step in the Vercel build never removes committed version snapshots.

**Blocked by:** 
- 49 — Vercel project and build order

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [ ] After a deploy, an older version's source item is still served.
- [ ] The copy step is changed if it removed them.
