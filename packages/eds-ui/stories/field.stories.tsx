import type { Meta, StoryObj } from "@storybook/react-vite"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSeparator, Input } from "../src"

const meta = {
  title: "Components/Field",
  component: Field,
  args: { orientation: "vertical" },
  argTypes: { orientation: { control: "select", options: ["vertical", "horizontal", "responsive"] } },
  render: (args) => (
    <Field {...args} className="w-72">
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" />
      <FieldDescription>We never share your email.</FieldDescription>
    </Field>
  ),
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Horizontal: Story = { args: { orientation: "horizontal" } }
export const Responsive: Story = { args: { orientation: "responsive" } }

export const Invalid: Story = {
  render: (args) => (
    <Field {...args} data-invalid className="w-72">
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" aria-invalid />
      <FieldError>Enter a valid email.</FieldError>
    </Field>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <FieldGroup className="w-72">
      <Field>
        <FieldLabel htmlFor="first">First name</FieldLabel>
        <Input id="first" />
      </Field>
      <FieldSeparator>or</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="nick">Nickname</FieldLabel>
        <Input id="nick" />
      </Field>
    </FieldGroup>
  ),
}
