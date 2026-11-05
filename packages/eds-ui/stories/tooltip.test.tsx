import { act, fireEvent, screen } from "@testing-library/react"
import * as stories from "./tooltip.stories"
import { smoke } from "./smoke"

// Opens by focus, with no TooltipProvider mounted.
smoke(stories, async () => {
  const trigger = screen.getByRole("button", { name: "Hover me" })
  await act(async () => {
    trigger.focus()
    fireEvent.focus(trigger)
  })
  await screen.findByText("Add to library")
})
