// Vercel build for docs, registry and Storybook on one origin. Run from the repo root.
// Order: package build, registry build, Storybook build, copy both into docs/public, docs build.
import { spawnSync } from "node:child_process"
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs"

const run = (cmd, args) => {
  const res = spawnSync(cmd, args, { stdio: "inherit" })
  if (res.status !== 0) process.exit(res.status ?? 1)
}
const snapshots = () => (existsSync(srcDir) ? readdirSync(srcDir).sort() : [])

const srcDir = "apps/docs/public/r/src"
const before = snapshots()
if (before.length === 0) {
  console.error(`No committed source snapshots in ${srcDir}`)
  process.exit(1)
}

// docs resolves the package from dist, and Storybook and the registry read its sources.
run("pnpm", ["--filter", "@asif-sirajudeen/eds-ui", "build"])
run("pnpm", ["registry:build"])
run("pnpm", ["--filter", "@asif-sirajudeen/eds-ui", "build-storybook"])

// Replace only /storybook. Never touch public/r: committed version snapshots live under r/src.
rmSync("apps/docs/public/storybook", { recursive: true, force: true })
mkdirSync("apps/docs/public", { recursive: true })
cpSync("packages/eds-ui/storybook-static", "apps/docs/public/storybook", { recursive: true })

const after = snapshots()
if (JSON.stringify(before) !== JSON.stringify(after)) {
  console.error(`Source snapshots changed during build: ${before} -> ${after}`)
  process.exit(1)
}

run("pnpm", ["--filter", "@eds-ui/docs", "build"])
