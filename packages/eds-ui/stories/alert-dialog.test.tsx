import { fireEvent, screen } from "@testing-library/react"
import * as stories from "./alert-dialog.stories"
import { smoke } from "./smoke"

smoke(stories, async () => {
  fireEvent.click(screen.getByRole("button", { name: "Delete account" }))
  await screen.findByRole("alertdialog")
})
