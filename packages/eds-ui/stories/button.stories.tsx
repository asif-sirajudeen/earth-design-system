import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "../src"

const meta = {
  title: "Components/Button",
  component: Button,
  args: { children: "Button" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Outline: Story = { args: { variant: "outline" } }
export const Secondary: Story = { args: { variant: "secondary" } }
export const Ghost: Story = { args: { variant: "ghost" } }
export const Destructive: Story = { args: { variant: "destructive" } }
export const Link: Story = { args: { variant: "link" } }

export const Xs: Story = { args: { size: "xs" } }
export const Sm: Story = { args: { size: "sm" } }
export const Lg: Story = { args: { size: "lg" } }
export const Icon: Story = { args: { size: "icon", children: "+", "aria-label": "Add" } }
export const IconXs: Story = { args: { size: "icon-xs", children: "+", "aria-label": "Add" } }
export const IconSm: Story = { args: { size: "icon-sm", children: "+", "aria-label": "Add" } }
export const IconLg: Story = { args: { size: "icon-lg", children: "+", "aria-label": "Add" } }
