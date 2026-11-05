import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { Badge } from "../src"
import * as stories from "./badge.stories"
import { smoke } from "./smoke"

smoke(stories)

test.each(["positive", "caution"] as const)("%s variant renders its status classes", (variant) => {
  render(<Badge variant={variant}>Status</Badge>)
  const badge = screen.getByText("Status")
  expect(badge).toHaveClass(`bg-${variant}`, `text-${variant}-foreground`)
  expect(badge).toHaveAttribute("data-variant", variant)
})
