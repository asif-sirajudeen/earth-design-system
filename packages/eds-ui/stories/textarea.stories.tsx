import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "../src"

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  args: { placeholder: "Type your message", "aria-label": "Message" },
  argTypes: { disabled: { control: "boolean" } },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
export const Invalid: Story = { args: { "aria-invalid": true } }
