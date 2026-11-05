import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../src"

type Args = { showCloseButton?: boolean; footerClose?: boolean }

function Example({ showCloseButton, footerClose }: Args) {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Open dialog</DialogTrigger>
      <DialogContent showCloseButton={showCloseButton}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here.</DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton={footerClose}>
          <DialogClose render={<Button />}>Save</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const meta = {
  title: "Components/Dialog",
  component: Example,
  argTypes: {
    showCloseButton: { control: "boolean" },
    footerClose: { control: "boolean" },
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const NoCloseButton: Story = { args: { showCloseButton: false } }
export const FooterClose: Story = { args: { footerClose: true } }
