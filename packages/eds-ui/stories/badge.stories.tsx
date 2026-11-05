import type { Meta, StoryObj } from "@storybook/react-vite"
import { Badge } from "../src"

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: { children: "Badge" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link", "positive", "caution"],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Secondary: Story = { args: { variant: "secondary" } }
export const Destructive: Story = { args: { variant: "destructive" } }
export const Outline: Story = { args: { variant: "outline" } }
export const Ghost: Story = { args: { variant: "ghost" } }
export const Link: Story = { args: { variant: "link" } }
// Local variants: info is default, critical is destructive.
export const Positive: Story = { args: { variant: "positive", children: "Active" } }
export const Caution: Story = { args: { variant: "caution", children: "Pending" } }
