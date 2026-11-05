#!/usr/bin/env node
// Thin wrapper over a pinned shadcn CLI. Read-only: no add command, writes no files.
import { spawnSync } from "node:child_process"
import { readFileSync } from "node:fs"

// Bump on re-pull, together with the shadcn devDependency.
const SHADCN_VERSION = "4.23.0"
const { version } = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"))
const base = (process.env.EDS_UI_REGISTRY_URL ?? "https://eds-ui.vercel.app").replace(/\/+$/, "")
// EDS_UI_SHADCN points at a local shadcn binary (tests, CI); default is the pinned npx one.
const shadcn = process.env.EDS_UI_SHADCN ? [process.env.EDS_UI_SHADCN] : ["npx", "--yes", `shadcn@${SHADCN_VERSION}`]

const usage = `Usage: eds-ui <command>

  list              list every component
  search <query>    find a component by keyword
  view <component>  print the description, then the source of the installed version
`

function run(args, stdio) {
  const [cmd, ...pre] = shadcn
  return spawnSync(cmd, [...pre, ...args], { encoding: "utf8", stdio })
}

function fail(message) {
  process.stderr.write(`${message}\n`)
  process.exit(1)
}

// Prints captured stderr and exits with shadcn's status on failure; otherwise returns the viewed items.
function viewItems(url) {
  const res = run(["view", url], ["ignore", "pipe", "pipe"])
  if (res.error) fail(`Could not run shadcn: ${res.error.message}`)
  if (res.status !== 0) {
    process.stderr.write(res.stderr || res.stdout)
    process.exit(res.status ?? 1)
  }
  return JSON.parse(res.stdout)
}

const [command, arg] = process.argv.slice(2)

if (command === "list" || command === "search") {
  // The registry URL, not @eds-ui: works when the app has not registered the namespace.
  const args = ["list", `${base}/r/registry.json`]
  if (command === "search") {
    if (!arg) fail("Usage: eds-ui search <query>")
    args.push("-q", arg)
  }
  const res = run(args, "inherit")
  if (res.error) fail(`Could not run shadcn: ${res.error.message}`)
  process.exit(res.status ?? 1)
} else if (command === "view") {
  if (!arg || !/^[a-z0-9-]+$/.test(arg)) fail("Usage: eds-ui view <component>")
  const [item] = viewItems(`${base}/r/${arg}.json`)
  // setup is guidance only: it has no source twin.
  if (arg === "setup") {
    process.stdout.write(`${item.description ?? item.name}\n`)
    process.exit(0)
  }
  const [source] = viewItems(`${base}/r/src/${version}/${arg}.json`)
  const files = (source.files ?? []).map((f) => `// ${f.path}\n${f.content}`)
  process.stdout.write(`${item.description ?? item.name}\n\n${files.join("\n")}`)
} else {
  process.stderr.write(usage)
  process.exit(command ? 1 : 0)
}
