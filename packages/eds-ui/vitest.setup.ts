import { setProjectAnnotations } from "@storybook/react-vite"
import "@testing-library/jest-dom/vitest"
import * as preview from "./.storybook/preview"

// Applies preview decorators/parameters to composed stories.
setProjectAnnotations([preview.default])

// axe probes canvas for icon-ligature checks; jsdom has none, so silence the "not implemented" noise.
HTMLCanvasElement.prototype.getContext = () => null
