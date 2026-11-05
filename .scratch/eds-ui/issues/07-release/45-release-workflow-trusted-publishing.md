# 45 — Release workflow with trusted publishing and provenance

**Group:** release

**What to build:** Merging the Version Packages PR publishes to public npm with no stored token.

**Blocked by:** 
- 44 — Changesets config and version script with snapshot

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `high`

**Human step:** Configure the npm trusted publisher on npmjs.com

- [ ] Release workflow runs on push to main, opens the Version PR, and publishes on merge via OIDC trusted publishing with provenance.
- [ ] Package has public publish access.
- [ ] The workflow only versions and publishes; it does not build the registry or Storybook.
