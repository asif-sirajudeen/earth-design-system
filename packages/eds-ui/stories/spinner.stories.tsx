import type { Meta, StoryObj } from "@storybook/react-vite"
import { Spinner } from "../src"

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: { className: { control: "text" } },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
// No size prop: size by className.
export const Large: Story = { args: { className: "size-8" } }
