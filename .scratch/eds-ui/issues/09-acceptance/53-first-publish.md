# 53 — First publish to npm

**Group:** acceptance

**What to build:** The first version is published to public npm and consumers can install it.

**Blocked by:** 
- 45 — Release workflow with trusted publishing and provenance
- 46 — MIT license, README and 0.1.0
- 49 — Vercel project and build order

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `high`

**Human step:** Merge the Version PR and confirm the npm publish

- [ ] Version PR merged and published with provenance.
- [ ] Install works from public npm with no auth.
- [ ] Badge RSC behaviour is checked in a Next.js app router app.
