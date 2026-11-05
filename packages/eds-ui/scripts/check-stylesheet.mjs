// Run after `pnpm build`. Compiles fixtures/app.css (the three app setup lines) against dist/
// with the Tailwind CLI, then fails if a sentinel selector is missing or a `ui:` token is left in src/components.
import { execFileSync } from "node:child_process"
import { readdirSync, readFileSync, mkdtempSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

const root = new URL("..", import.meta.url).pathname
const problems = []

// Each sentinel is a literal substring that must appear in the compiled CSS.
const sentinels = [
  ".bg-primary",
  '.data-open\\:animate-in:where([data-state="open"])',
  ".after\\:content-\\[\\'\\'\\]::after",
  "border-radius: min(var(--radius-md), 10px)",
  "\\:animate-in",
  ".dark\\:bg-input\\/30",
  ".focus-visible\\:ring-3",
  ".has-data-\\[icon\\=inline-end\\]\\:pr-2",
  ".rounded-lg",
  "rounded-\\[var\\(--radius-button\\)\\]",
  ".text-muted-foreground",
]

const out = join(mkdtempSync(join(tmpdir(), "eds-ui-fixture-")), "out.css")
// cwd is fixtures/ so Tailwind's automatic source detection cannot see src/ and find classes on its own;
// only the shipped @source in dist/styles.css may supply them.
execFileSync(join(root, "node_modules/.bin/tailwindcss"), ["-i", "app.css", "-o", out], {
  cwd: join(root, "fixtures"),
  stdio: "inherit",
})
const css = readFileSync(out, "utf8")
const theme = readFileSync(join(root, "dist/themes/default.css"), "utf8")
// Status utilities are only emitted once a component uses them, so check the theme and mapping directly.
const mapping = readFileSync(join(root, "dist/styles.css"), "utf8")
for (const v of ["positive", "positive-foreground", "caution", "caution-foreground"]) {
  if (theme.split(`--${v}:`).length !== 3) problems.push(`theme must define --${v} in light and dark`)
  if (!mapping.includes(`--color-${v}: var(--${v})`)) problems.push(`styles.css must map --color-${v}`)
}
if (!theme.includes("--radius-button: var(--radius)")) problems.push("--radius-button must default to var(--radius)")
if (/--font-sans|--[\w-]*(hover|pressed)/.test(theme)) problems.push("theme must not set --font-sans or hover/pressed vars")
for (const s of sentinels) if (!css.includes(s)) problems.push(`missing sentinel selector: ${s}`)

// A `ui:` variant token means a prefixed pull leaked into the unprefixed source.
const uiToken = /(^|[\s"'`])ui:/
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  )
for (const file of walk(join(root, "src/components"))) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      if (uiToken.test(line)) problems.push(`ui: token at ${file.replace(root, "")}:${i + 1}`)
    })
}

if (problems.length) {
  console.error(problems.join("\n"))
  process.exit(1)
}
console.log(`ok: ${sentinels.length} sentinels present, no ui: tokens`)
