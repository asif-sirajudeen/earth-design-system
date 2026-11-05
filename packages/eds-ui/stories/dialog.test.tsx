import { fireEvent, screen } from "@testing-library/react"
import * as stories from "./dialog.stories"
import { smoke } from "./smoke"

smoke(stories, async () => {
  fireEvent.click(screen.getByRole("button", { name: "Open dialog" }))
  await screen.findByRole("dialog")
})
