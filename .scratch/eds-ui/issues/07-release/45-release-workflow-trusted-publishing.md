# 45 — Release workflow with trusted publishing and provenance

**Group:** release

**What to build:** Merging the Version Packages PR publishes to public npm with no stored token.

**Blocked by:** 
- 44 — Changesets config and version script with snapshot

**Status:** done

**Model:** `sonnet`

**Effort:** `high`

**Human step:** Configure the npm trusted publisher on npmjs.com

- [x] Release workflow runs on push to main, opens the Version PR, and publishes on merge via OIDC trusted publishing with provenance.
- [x] Package has public publish access.
- [x] The workflow only versions and publishes; it does not build the registry or Storybook.

## Comments

Workflow is `.github/workflows/release.yml`. The root `release` script builds eds-ui (not the registry or Storybook) before `changeset publish`, since `dist` is gitignored. Still to do by hand: npm trusted publisher (repo, workflow `release.yml`) on npmjs.com, and enable "Allow GitHub Actions to create pull requests" in repo settings. Not exercised end to end.
