import { fireEvent, screen } from "@testing-library/react"
import * as stories from "./dropdown-menu.stories"
import { smoke } from "./smoke"

smoke(stories, async () => {
  fireEvent.click(screen.getByRole("button", { name: "Open menu" }))
  await screen.findByRole("menu")
})
