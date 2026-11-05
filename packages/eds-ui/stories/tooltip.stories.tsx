import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "../src"

type Args = { side?: "top" | "right" | "bottom" | "left" }

// No TooltipProvider is mounted: Tooltip works without one.
function Example({ side }: Args) {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>Hover me</TooltipTrigger>
      <TooltipContent side={side}>Add to library</TooltipContent>
    </Tooltip>
  )
}

const meta = {
  title: "Components/Tooltip",
  component: Example,
  argTypes: { side: { control: "select", options: ["top", "right", "bottom", "left"] } },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Right: Story = { args: { side: "right" } }
export const Bottom: Story = { args: { side: "bottom" } }
export const Left: Story = { args: { side: "left" } }
