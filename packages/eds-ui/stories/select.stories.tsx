import type { Meta, StoryObj } from "@storybook/react-vite"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "../src"

type Args = { size?: "default" | "sm"; disabled?: boolean }

// Options are composed from parts, not an options prop.
function Fruits({ size, disabled }: Args) {
  return (
    <Select disabled={disabled}>
      <SelectTrigger size={size} className="w-48" aria-label="Fruit">
        <SelectValue placeholder="Pick a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const meta = {
  title: "Components/Select",
  component: Fruits,
  argTypes: {
    size: { control: "select", options: ["default", "sm"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Fruits>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Sm: Story = { args: { size: "sm" } }
export const Disabled: Story = { args: { disabled: true } }
