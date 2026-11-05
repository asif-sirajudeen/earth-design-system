import { fireEvent, screen } from "@testing-library/react"
import * as stories from "./toast.stories"
import { smoke } from "./smoke"

smoke(stories, async () => {
  fireEvent.click(screen.getByRole("button", { name: "Show toast" }))
  await screen.findByText("Event created")
})
