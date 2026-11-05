import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "../src"

const meta = {
  title: "Components/Input",
  component: Input,
  args: { placeholder: "Email", "aria-label": "Email" },
  argTypes: {
    type: { control: "select", options: ["text", "email", "password", "number", "file"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
export const Invalid: Story = { args: { "aria-invalid": true } }
export const File: Story = { args: { type: "file", placeholder: undefined, "aria-label": "Upload" } }
