import { fireEvent, screen } from "@testing-library/react"
import * as stories from "./select.stories"
import { smoke } from "./smoke"

smoke(stories, async () => {
  const trigger = screen.getByRole("combobox")
  fireEvent.click(trigger)
  if (!trigger.hasAttribute("data-disabled")) await screen.findAllByRole("option")
})
