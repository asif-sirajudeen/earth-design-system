# 13 — llms.txt, llms-full.txt and per-page markdown routes

**Group:** foundation

**What to build:** An AI agent can read the docs as plain text: the site serves `llms.txt`, `llms-full.txt` and a markdown version of each page at the page path plus `.md`.

**Blocked by:** 
- 12 — Docs app tracer: Fumadocs and Button page

**Status:** done

**Model:** `sonnet`

**Effort:** `medium`

- [x] `llms.txt`, `llms-full.txt` and per-page markdown are served with processed markdown.
- [x] The Fumadocs MCP route is off.
- [x] Button page markdown is reachable at its page path plus `.md`.
