import { fireEvent, screen } from "@testing-library/react"
import * as stories from "./popover.stories"
import { smoke } from "./smoke"

smoke(stories, async () => {
  fireEvent.click(screen.getByRole("button", { name: "Open popover" }))
  await screen.findByRole("dialog")
})
