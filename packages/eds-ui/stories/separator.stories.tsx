import type { Meta, StoryObj } from "@storybook/react-vite"
import { Separator } from "../src"

const meta = {
  title: "Components/Separator",
  component: Separator,
  argTypes: { orientation: { control: "select", options: ["horizontal", "vertical"] } },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="w-64">
      <p className="text-sm">Above</p>
      <Separator {...args} className="my-2" />
      <p className="text-sm">Below</p>
    </div>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div className="flex h-5 items-center gap-2 text-sm">
      Left
      <Separator {...args} />
      Right
    </div>
  ),
}
