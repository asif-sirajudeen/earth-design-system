import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { Alert } from "../src"
import * as stories from "./alert.stories"
import { smoke } from "./smoke"

smoke(stories)

test.each(["positive", "caution"] as const)("%s variant renders its status classes", (variant) => {
  render(<Alert variant={variant}>Message</Alert>)
  expect(screen.getByRole("alert")).toHaveClass(`border-${variant}/50`)
})
