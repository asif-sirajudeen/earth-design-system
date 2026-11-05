import type { Meta, StoryObj } from "@storybook/react-vite"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "../src"

type Args = { variant?: "default" | "destructive" | "positive" | "caution" }

function Example({ variant }: Args) {
  return (
    <Alert variant={variant} className="max-w-md">
      <InfoIcon />
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>You can add components to your app.</AlertDescription>
    </Alert>
  )
}

const meta = {
  title: "Components/Alert",
  component: Example,
  argTypes: { variant: { control: "select", options: ["default", "destructive", "positive", "caution"] } },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Destructive: Story = { args: { variant: "destructive" } }

// Local variants: info is default, critical is destructive.
export const Positive: Story = {
  render: () => (
    <Alert variant="positive" className="max-w-md">
      <CircleCheckIcon />
      <AlertTitle>Saved</AlertTitle>
      <AlertDescription>Your changes are live.</AlertDescription>
    </Alert>
  ),
}
export const Caution: Story = {
  render: () => (
    <Alert variant="caution" className="max-w-md">
      <TriangleAlertIcon />
      <AlertTitle>Check your plan</AlertTitle>
      <AlertDescription>Usage is close to the limit.</AlertDescription>
    </Alert>
  ),
}
