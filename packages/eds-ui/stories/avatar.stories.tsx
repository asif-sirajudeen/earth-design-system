import type { Meta, StoryObj } from "@storybook/react-vite"
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount } from "../src"

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  args: { children: <AvatarFallback>AB</AvatarFallback> },
  argTypes: { size: { control: "select", options: ["sm", "default", "lg"] } },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Sm: Story = { args: { size: "sm" } }
export const Lg: Story = { args: { size: "lg" } }

// Recipe: status is an AvatarBadge with a color class. No status prop.
export const StatusOnline: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>AB</AvatarFallback>
      <AvatarBadge className="bg-positive" />
    </Avatar>
  ),
}
export const StatusAway: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>AB</AvatarFallback>
      <AvatarBadge className="bg-caution" />
    </Avatar>
  ),
}

// Recipe: extra sizes by className. The badge stays at the default size.
export const ExtraLarge: Story = { args: { className: "size-16" } }

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>CD</AvatarFallback></Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
}
