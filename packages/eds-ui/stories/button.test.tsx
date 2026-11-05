import { render } from "@testing-library/react"
import { composeStories } from "@storybook/react-vite"
import axe from "axe-core"
import { afterEach, beforeEach, expect, test, vi } from "vitest"
import * as stories from "./button.stories"

const composed = Object.entries(composeStories(stories))

let errors: ReturnType<typeof vi.spyOn>
beforeEach(() => {
  errors = vi.spyOn(console, "error")
})
afterEach(() => errors.mockRestore())

test.each(composed)("%s renders without console errors or axe violations", async (_name, Story) => {
  const { container } = render(<Story />)
  const { violations } = await axe.run(container, {
    // jsdom has no layout/painting; color-contrast is checked in the theme ticket.
    rules: { "color-contrast": { enabled: false } },
  })
  expect(violations).toEqual([])
  expect(errors).not.toHaveBeenCalled()
})
