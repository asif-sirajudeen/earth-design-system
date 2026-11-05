import type { Meta, StoryObj } from "@storybook/react-vite"
import { Field, FieldContent, FieldDescription, FieldLabel, Switch } from "../src"

const meta = {
  title: "Components/Switch",
  component: Switch,
  args: { "aria-label": "Airplane mode" },
  argTypes: {
    size: { control: "select", options: ["default", "sm"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Sm: Story = { args: { size: "sm" } }
export const Checked: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }

// Labelling and descriptions come from Field parts, not Switch props.
export const WithField: Story = {
  args: { id: "airplane", "aria-label": undefined },
  render: (args) => (
    <Field orientation="horizontal">
      <FieldContent>
        <FieldLabel htmlFor="airplane">Airplane mode</FieldLabel>
        <FieldDescription>Turns off all wireless radios.</FieldDescription>
      </FieldContent>
      <Switch {...args} />
    </Field>
  ),
}
