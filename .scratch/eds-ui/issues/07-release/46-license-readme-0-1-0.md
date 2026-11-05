# 46 — MIT license, README and 0.1.0

**Group:** release

**What to build:** The package page on npm tells a developer how to start.

**Blocked by:** 
- 42 — eds-ui CLI: list, search, view

**Status:** done

**Model:** `haiku`

**Effort:** `low`

- [x] MIT license file present.
- [x] README has the install line, the CSS import block, one line on the CLI and the docs link, nothing more.
- [x] Dependencies and peers match the spec: React and React DOM ^19 as peers; Base UI, class-variance-authority, cn and lucide-react as dependencies.

## Comments

LICENSE at root and in `packages/eds-ui`. Copyright holder is AnywhereWorks while the scope is personal; confirm with legal. `tw-animate-css` dependency and `tailwindcss` peer are beyond the ticket list; kept because `styles.css` imports the former.
