# 42 — eds-ui CLI: list, search, view

**Group:** registry-cli

**What to build:** An agent runs `npx eds-ui list|search|view` and reads the real component source for the installed version. The CLI has no add command and writes nothing.

**Blocked by:** 
- 38 — setup registry item with CSS import order
- 41 — registry:snapshot script

**Status:** ready-for-agent

**Model:** `opus`

**Effort:** `high`

- [ ] Bin `eds-ui` is a thin wrapper over a pinned shadcn CLI version.
- [ ] `list` and `search` wrap the registry commands; this is verified to work when the app has not registered `@eds-ui`.
- [ ] `view <x>` prints the item description (import line first), then the source for its own package version; `shadcn view` with a full item URL is verified.
- [ ] No add command; the CLI writes no files.
