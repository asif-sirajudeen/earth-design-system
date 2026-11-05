import type { ComponentType } from "react"
import { cleanup, render } from "@testing-library/react"
import { composeStories } from "@storybook/react-vite"
import axe from "axe-core"
import { afterEach, beforeEach, expect, test, vi } from "vitest"

type StoryModule = Parameters<typeof composeStories>[0]

// Renders every story, then fails on console errors or axe violations.
// `act` runs after render and before axe, e.g. to open a popup; axe then scans the whole document.
export function smoke(stories: StoryModule, act?: (container: HTMLElement) => Promise<void>) {
  const composed = Object.entries(composeStories(stories)) as [string, ComponentType][]
  let errors: ReturnType<typeof vi.spyOn>
  beforeEach(() => {
    errors = vi.spyOn(console, "error")
  })
  afterEach(() => {
    errors.mockRestore()
    cleanup()
  })

  test.each(composed)("%s renders without console errors or axe violations", async (_name, Story) => {
    const { container } = render(<Story />)
    await act?.(container)
    const { violations } = await axe.run(act ? document.body : container, {
      // jsdom has no layout/painting; color-contrast is checked in the theme ticket.
      // `region` is a page-level rule; portaled popups sit outside any landmark.
      rules: { "color-contrast": { enabled: false }, region: { enabled: false } },
    })
    expect(violations).toEqual([])
    expect(errors).not.toHaveBeenCalled()
  })
}
