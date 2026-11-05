import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button, Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "../src"

type Args = { side?: "top" | "right" | "bottom" | "left"; align?: "start" | "center" | "end" }

function Example({ side, align }: Args) {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger>
      <PopoverContent side={side} align={align}>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

const meta = {
  title: "Components/Popover",
  component: Example,
  argTypes: {
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    align: { control: "select", options: ["start", "center", "end"] },
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Top: Story = { args: { side: "top" } }
export const AlignEnd: Story = { args: { align: "end" } }
