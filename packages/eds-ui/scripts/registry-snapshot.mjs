// Builds the source registry into the docs app's static r/src/<version>/ folder.
// Run by the changesets version step, after the version bump. Only that version's folder is replaced.
import { spawnSync } from "node:child_process"
import { readFileSync, rmSync } from "node:fs"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("..", import.meta.url))
const { version } = JSON.parse(readFileSync(`${root}package.json`, "utf8"))
const srcRoot = process.argv[2] ?? fileURLToPath(new URL("../../../apps/docs/public/r/src", import.meta.url))
const out = `${srcRoot.replace(/\/+$/, "")}/${version}`

rmSync(out, { recursive: true, force: true })
const res = spawnSync("shadcn", ["build", "registry-src.json", "-o", out], { cwd: root, stdio: "inherit" })
if (res.status !== 0) process.exit(res.status ?? 1)
