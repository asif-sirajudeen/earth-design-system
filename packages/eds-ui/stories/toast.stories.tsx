import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button, Toaster, toast } from "../src"

type Args = { type?: "success" | "info" | "warning" | "error" | "loading"; timeout?: number }

// One <Toaster /> at the app root; toast.add() is imperative.
function Example({ type, timeout }: Args) {
  return (
    <Toaster>
      <Button
        variant="outline"
        onClick={() => toast.add({ title: "Event created", description: "Monday, 9:00 AM", type, timeout })}
      >
        Show toast
      </Button>
    </Toaster>
  )
}

const meta = {
  title: "Components/Toast",
  component: Example,
  argTypes: {
    type: { control: "select", options: [undefined, "success", "info", "warning", "error", "loading"] },
    timeout: { control: "number" },
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Success: Story = { args: { type: "success" } }
export const Info: Story = { args: { type: "info" } }
export const Warning: Story = { args: { type: "warning" } }
export const ErrorToast: Story = { args: { type: "error" } }
// EDS loading maps to type "loading"; timeout 0 keeps it until dismissed.
export const Loading: Story = { args: { type: "loading", timeout: 0 } }
