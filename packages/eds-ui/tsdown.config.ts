import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/index.ts"],
  format: "esm",
  unbundle: true,
  dts: true,
  // Browser/RSC library; also gives .js/.d.ts to match package.json exports (platform "node" emits .mjs).
  platform: "neutral",
  // Unbundled output keeps each file's "use client"; the bundler warning does not apply.
  checks: { moduleLevelDirective: false },
  // CSS is shipped uncompiled: the app's Tailwind processes styles.css via its @source.
  copy: [
    { from: "src/styles.css", to: "dist" },
    { from: "src/shadcn.css", to: "dist" },
    { from: "src/themes/default.css", to: "dist/themes" },
  ],
})
