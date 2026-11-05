import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input, Label } from "../src"

const meta = {
  title: "Components/Label",
  component: Label,
  args: { children: "Email", htmlFor: "email" },
  render: (args) => (
    <div className="grid gap-2">
      <Label {...args} />
      <Input id="email" placeholder="you@example.com" />
    </div>
  ),
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
