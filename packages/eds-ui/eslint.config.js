import jsxA11y from "eslint-plugin-jsx-a11y"
import tseslint from "typescript-eslint"

const a11y = jsxA11y.flatConfigs.recommended

export default [
  { ignores: ["dist", "storybook-static", "fixtures"] },
  {
    ...a11y,
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ...a11y.languageOptions,
      parser: tseslint.parser,
    },
  },
  {
    // Label: stock shadcn renders a bare <label>; the control association comes from the consumer (htmlFor or nesting).
    files: ["src/components/ui/label.tsx"],
    rules: { "jsx-a11y/label-has-associated-control": "off" },
  },
]
