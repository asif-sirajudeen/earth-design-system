# 07 — Package tracer: Button builds and imports from the tarball

**Group:** foundation

**What to build:** A consuming app can install the packed package, import Button from the package root, add `@import "tailwindcss"` then the package theme and styles, and see a correctly styled Button in light mode, compiled by the app's own Tailwind. This proves the base setup works end to end on one component.

**Blocked by:** 
- 05 — JS and type build with tsdown
- 06 — Shipped `@source` CSS entry, vendored shadcn.css and neutral theme file

**Status:** done

**Model:** `opus`

**Effort:** `high`

- [x] Package root exports Button; Button comes from the components pulled in the base setup.
- [x] Package exports are exactly the root, `styles.css` and `themes/default.css`; the tarball contains only build output.
- [x] A throwaway pnpm app on Tailwind ^4.3 installs the packed tarball and renders Button correctly with the three setup lines and no `@source` line of its own.
- [x] An app `className` override (`<Button className="bg-red-500">`) wins through `cn()`, and `.dark` on `<html>` switches the theme.

**Reworked per wayfinder ticket 21** (`.wayfinder/tickets/21-css-distribution-reopen.md`, 2026-11-05): no prefix, no prebuilt utility CSS; the app's Tailwind compiles the package classes through `@source`.

## Comments

**2026-11-05 — verified, no package changes needed.** The base setup (04–06) already met every item.

- `pnpm pack` tarball holds only `package.json` and `dist/` (44 JS/d.ts files, `styles.css`, `shadcn.css`, `themes/default.css`). Exports are exactly `.`, `./styles.css` and `./themes/default.css`. The reserved `eds-ui` bin still points at `dist/cli.js`, which ticket 42 adds.
- Throwaway app: pnpm, Vite 8.3.5, `@tailwindcss/vite` 4.3.4, React 19.3.1, tarball installed via `file:`. `app.css` has only `@import "tailwindcss"`, the theme and `styles.css`; no `@source` of its own. `tsc` passes against the shipped `.d.ts`.
- Compiled app CSS contains `.bg-primary`, `.h-8`, `.rounded-lg`, `.dark`, `--radius-md` and the tw-animate `@keyframes enter`.
- In the browser, the default Button computes to `bg oklch(0.205 0 0)`, text `oklch(0.985 0 0)`, 32px high, 10px radius.
- `<Button className="bg-red-500">` renders `bg-red-500` with `bg-primary` dropped by `cn()`; computed bg `oklch(0.637 0.237 25.331)`.
- `.dark` on `<html>` flips `--primary` to `oklch(0.922 0 0)` and the default Button follows.
- Note: the outline variant text inherits the page colour (black) because the trimmed stylesheet has no `@layer base` body styles; the app owns those.
