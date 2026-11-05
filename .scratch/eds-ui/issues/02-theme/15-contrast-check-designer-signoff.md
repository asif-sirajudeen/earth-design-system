# 15 — Contrast check and designer sign-off of theme values

**Group:** theme

**What to build:** Every `X` and `X-foreground` pair, mainly positive and caution, meets WCAG AA (4.5:1) in light and dark, and design has signed off the shipped values.

**Blocked by:** 
- 14 — Status colors and --radius-button theme variables

**Status:** ready-for-agent

**Model:** `sonnet`

**Effort:** `low`

**Human step:** Designer signs off the theme values

- [x] Contrast ratios for all pairs recorded for light and dark.
- [x] Any failing pair is adjusted and rechecked.
- [ ] Designer sign-off recorded on the ticket.
- [x] Rerun instruction noted: only when theme values change.

## Contrast results (`pnpm --filter @asif-sirajudeen/eds-ui check:contrast`, AA 4.5:1)

Light: card 19.79, popover 19.79, primary 17.16, secondary 16.42, muted 5.50, accent 16.42, positive 4.73, caution 6.99.
Dark: card 17.16, popover 17.16, primary 14.22, secondary 14.48, muted 5.83, accent 14.48, positive 8.90, caution 11.53.

Adjusted: light `--muted-foreground` 0.556 -> 0.5 (was 4.34:1). Rerun only when theme values change.

Designer sign-off: PENDING (human step).
