import type { StorybookConfig } from "@storybook/react-vite"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-themes"],
  core: { disableTelemetry: true },
  viteFinal: (config) => ({
    ...config,
    plugins: [...(config.plugins ?? []), tailwindcss()],
    // Components import siblings through the "@/" alias used by shadcn.
    resolve: { ...config.resolve, alias: { "@": fileURLToPath(new URL("../src", import.meta.url)) } },
  }),
}

export default config
