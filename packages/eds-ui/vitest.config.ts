import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: "components",
          environment: "jsdom",
          setupFiles: ["./vitest.setup.ts"],
          include: ["stories/**/*.test.tsx"],
        },
      },
      // The eds-ui bin as a subprocess: no DOM, no component setup.
      {
        extends: true,
        // Each test spawns shadcn; that is slow while the other project runs in parallel.
        test: { name: "cli", environment: "node", include: ["tests/**/*.test.ts"], testTimeout: 30_000 },
      },
    ],
  },
})
