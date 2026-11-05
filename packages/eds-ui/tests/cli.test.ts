import { execFile } from "node:child_process"
import { readFileSync } from "node:fs"
import { createServer, type Server } from "node:http"
import type { AddressInfo } from "node:net"
import { fileURLToPath } from "node:url"
import { promisify } from "node:util"
import { afterAll, beforeAll, describe, expect, it } from "vitest"

const run = promisify(execFile)
const pkg = fileURLToPath(new URL("..", import.meta.url))
const { version } = JSON.parse(readFileSync(`${pkg}package.json`, "utf8"))

const description = 'import { Widget, WidgetPart } from "@fixture/widget"\nFixture description line two.'
const source = "export function Widget() {\n  return null\n}\n"
const routes: Record<string, unknown> = {
  "/r/registry.json": {
    name: "fixture",
    homepage: "http://localhost",
    items: [
      { name: "widget", type: "registry:ui", description },
      { name: "gadget", type: "registry:ui", description: "A gadget." },
    ],
  },
  "/r/setup.json": { name: "setup", type: "registry:ui", description: "Setup steps." },
  "/r/widget.json": { name: "widget", type: "registry:ui", description },
  [`/r/src/${version}/widget.json`]: {
    name: "widget",
    type: "registry:ui",
    files: [{ path: "src/components/ui/widget.tsx", type: "registry:ui", content: source }],
  },
}

let server: Server
let env: NodeJS.ProcessEnv

beforeAll(async () => {
  server = createServer((req, res) => {
    const body = routes[new URL(req.url ?? "/", "http://x").pathname]
    res.writeHead(body ? 200 : 404, { "content-type": "application/json" })
    res.end(JSON.stringify(body ?? { error: "not found" }))
  })
  await new Promise<void>((ok) => server.listen(0, "127.0.0.1", ok))
  env = {
    ...process.env,
    EDS_UI_REGISTRY_URL: `http://127.0.0.1:${(server.address() as AddressInfo).port}`,
    // The pinned shadcn devDependency, so CI needs no network install of the CLI.
    EDS_UI_SHADCN: `${pkg}node_modules/.bin/shadcn`,
  }
})
afterAll(() => server.close())

// cwd is the package, which has no @eds-ui registered: the wrapper must not need it.
const eds = (...args: string[]) => run(process.execPath, [`${pkg}bin/eds-ui.mjs`, ...args], { env, cwd: pkg })

describe("eds-ui CLI", () => {
  it("view prints the description first, then the source", async () => {
    const { stdout } = await eds("view", "widget")
    expect(stdout.startsWith(description)).toBe(true)
    expect(stdout.indexOf(source)).toBeGreaterThan(description.length)
  })

  it("view setup prints the description only: it has no source twin", async () => {
    const { stdout } = await eds("view", "setup")
    expect(stdout.trim()).toBe("Setup steps.")
  })

  it("list passes through to shadcn", async () => {
    const { stdout } = await eds("list")
    expect(stdout).toContain("widget")
    expect(stdout).toContain("gadget")
  })

  it("search passes the query through", async () => {
    const { stdout } = await eds("search", "widget")
    expect(stdout).toContain("widget")
    expect(stdout).not.toContain("gadget")
  })

  it("has no add command", async () => {
    await expect(eds("add", "widget")).rejects.toMatchObject({ code: 1 })
  })
})

describe("registry manifest", () => {
  const registry = JSON.parse(readFileSync(`${pkg}registry.json`, "utf8"))

  it("names every exported part on description line 1", () => {
    for (const item of registry.items.filter((i: { name: string }) => i.name !== "setup")) {
      const src = readFileSync(`${pkg}src/components/ui/${item.name}.tsx`, "utf8")
      const exported = [
        ...[...src.matchAll(/^export (?:async )?(?:function|const) (\w+)/gm)].map((m) => m[1]),
        ...[...src.matchAll(/^export \{([^}]*)\}/gms)].flatMap((m) => (m[1] ?? "").split(",").map((x) => x.trim()).filter(Boolean)),
      ]
      const line1 = item.description.split("\n")[0]
      for (const name of exported) expect(line1, `${item.name}: ${name}`).toMatch(new RegExp(`\\b${name}\\b`))
    }
  })
})

it("pins the shadcn version that the devDependency installs", () => {
  const pinned = readFileSync(`${pkg}bin/eds-ui.mjs`, "utf8").match(/SHADCN_VERSION = "([^"]+)"/)?.[1]
  const dev = JSON.parse(readFileSync(`${pkg}package.json`, "utf8")).devDependencies.shadcn
  expect(dev).toBe(`^${pinned}`)
})
