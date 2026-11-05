import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../src"

type Args = { destructive?: boolean; disabled?: boolean }

function Example({ destructive, disabled }: Args) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Open menu</DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuItem>
            Profile <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled={disabled}>Billing</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Show toolbar</DropdownMenuCheckboxItem>
        <DropdownMenuRadioGroup value="top">
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant={destructive ? "destructive" : "default"}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const meta = {
  title: "Components/DropdownMenu",
  component: Example,
  argTypes: { destructive: { control: "boolean" }, disabled: { control: "boolean" } },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Destructive: Story = { args: { destructive: true } }
export const DisabledItem: Story = { args: { disabled: true } }
