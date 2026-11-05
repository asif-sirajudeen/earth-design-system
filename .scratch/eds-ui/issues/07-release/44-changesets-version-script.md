# 44 — Changesets config and version script with snapshot

**Group:** release

**What to build:** Running the version step bumps the package and commits the matching source snapshot.

**Blocked by:** 
- 41 — registry:snapshot script

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `medium`

- [ ] One changesets config at the workspace root; docs app ignored.
- [ ] The `version` script runs changeset version, then the registry snapshot.
- [ ] Versions start at 0.1.0; a bump produces the new snapshot folder.
