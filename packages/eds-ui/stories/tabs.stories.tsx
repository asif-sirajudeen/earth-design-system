import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../src"

type Args = { variant?: "default" | "line"; orientation?: "horizontal" | "vertical" }

function Example({ variant, orientation }: Args) {
  return (
    <Tabs defaultValue="account" orientation={orientation} className="w-80">
      <TabsList variant={variant}>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account.</TabsContent>
      <TabsContent value="password">Change your password.</TabsContent>
    </Tabs>
  )
}

const meta = {
  title: "Components/Tabs",
  component: Example,
  argTypes: {
    variant: { control: "select", options: ["default", "line"] },
    orientation: { control: "select", options: ["horizontal", "vertical"] },
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Line: Story = { args: { variant: "line" } }
export const Vertical: Story = { args: { orientation: "vertical" } }
