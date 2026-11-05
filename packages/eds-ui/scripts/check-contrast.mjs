// Rerun only when theme values change: node scripts/check-contrast.mjs
// Checks every --X / --X-foreground pair in the theme against WCAG AA (4.5:1), light and dark.
import { readFileSync } from "node:fs"

const css = readFileSync(new URL("../src/themes/default.css", import.meta.url), "utf8")
const block = (sel) => css.match(new RegExp(`${sel}\\s*{([^}]*)}`))[1]
const vars = (b) => Object.fromEntries([...b.matchAll(/--([\w-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]))

const light = vars(block(":root"))
const dark = { ...light, ...vars(block("\\.dark")) }

function luminance(oklch) {
  const [L, C, h] = oklch.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)/).slice(1).map(Number)
  const a = C * Math.cos((h * Math.PI) / 180), b = C * Math.sin((h * Math.PI) / 180)
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3
  const [r, g, bl] = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ].map((v) => Math.min(1, Math.max(0, v)))
  return 0.2126 * r + 0.7152 * g + 0.0722 * bl
}
const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

let failed = false
for (const [mode, v] of [["light", light], ["dark", dark]]) {
  for (const name of Object.keys(v)) {
    const fg = v[name === "background" ? "foreground" : `${name}-foreground`]
    if (!fg) continue
    const r = ratio(v[name], fg)
    if (r < 4.5) failed = true
    console.log(`${r < 4.5 ? "FAIL" : "PASS"} ${mode.padEnd(5)} ${name.padEnd(10)} ${r.toFixed(2)}:1`)
  }
}
process.exit(failed ? 1 : 0)
