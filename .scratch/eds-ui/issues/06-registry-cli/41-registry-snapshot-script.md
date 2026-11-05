# 41 — registry:snapshot script

**Group:** registry-cli

**What to build:** A script builds the source registry into the docs app's static folder under the new version, so each release keeps a version-matched source snapshot in git.

**Blocked by:** 
- 40 — Source registry manifest with 21 source items

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `high`

- [ ] Running the script writes about 21 JSON files under the current package version's folder.
- [ ] Older version folders are untouched.
- [ ] Script is runnable by the changesets version step.
