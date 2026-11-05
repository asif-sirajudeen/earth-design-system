import type { Meta, StoryObj } from "@storybook/react-vite"
import { Checkbox, Field, FieldContent, FieldDescription, FieldLabel } from "../src"

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: { "aria-label": "Accept terms" },
  argTypes: { disabled: { control: "boolean" }, defaultChecked: { control: "boolean" } },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Checked: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }
export const Invalid: Story = { args: { "aria-invalid": true } }

// Labelling and descriptions come from Field parts, not Checkbox props.
export const WithField: Story = {
  args: { id: "terms", "aria-label": undefined },
  render: (args) => (
    <Field orientation="horizontal">
      <Checkbox {...args} />
      <FieldContent>
        <FieldLabel htmlFor="terms">Accept terms</FieldLabel>
        <FieldDescription>You agree to our terms of service.</FieldDescription>
      </FieldContent>
    </Field>
  ),
}
