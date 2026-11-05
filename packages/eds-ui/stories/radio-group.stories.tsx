import type { Meta, StoryObj } from "@storybook/react-vite"
import { Field, FieldContent, FieldDescription, FieldLabel, FieldLegend, FieldSet, RadioGroup, RadioGroupItem } from "../src"

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  args: { defaultValue: "a", "aria-label": "Plan" },
  argTypes: { disabled: { control: "boolean" } },
  render: (args) => (
    <RadioGroup {...args}>
      <Field orientation="horizontal">
        <RadioGroupItem value="a" id="plan-a" />
        <FieldLabel htmlFor="plan-a">Starter</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="b" id="plan-b" />
        <FieldLabel htmlFor="plan-b">Team</FieldLabel>
      </Field>
    </RadioGroup>
  ),
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }

// Labelling and descriptions come from Field parts, not RadioGroup props.
export const WithField: Story = {
  args: { "aria-label": undefined },
  render: (args) => (
    <FieldSet>
      <FieldLegend>Plan</FieldLegend>
      <RadioGroup {...args}>
        <Field orientation="horizontal">
          <RadioGroupItem value="a" id="field-a" />
          <FieldContent>
            <FieldLabel htmlFor="field-a">Starter</FieldLabel>
            <FieldDescription>For individuals.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="b" id="field-b" />
          <FieldContent>
            <FieldLabel htmlFor="field-b">Team</FieldLabel>
            <FieldDescription>For groups.</FieldDescription>
          </FieldContent>
        </Field>
      </RadioGroup>
    </FieldSet>
  ),
}
