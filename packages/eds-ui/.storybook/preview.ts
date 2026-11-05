import type { Preview } from "@storybook/react-vite"
import { withThemeByClassName } from "@storybook/addon-themes"
import "./storybook.css"

const preview: Preview = {
  tags: ["autodocs"],
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
      // Target <html>, not the story root, so .dark matches app usage.
      parentSelector: "html",
    }),
  ],
}

export default preview
