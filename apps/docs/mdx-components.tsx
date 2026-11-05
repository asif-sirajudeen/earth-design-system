import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { ButtonExample } from "@/components/button-example"
import {
  AlertDialogExample,
  AlertExample,
  AvatarExample,
  BadgeExample,
  ButtonIconOnlyExample,
  ButtonLoadingExample,
  CheckboxExample,
  DialogExample,
  DropdownMenuExample,
  FieldExample,
  InputExample,
  LabelExample,
  PopoverExample,
  RadioGroupExample,
  SelectExample,
  SeparatorExample,
  SpinnerExample,
  SwitchExample,
  TabsExample,
  TextareaExample,
  ToastExample,
  TooltipExample,
} from "@/components/examples"
import { StorybookLink } from "@/components/storybook-link"

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ButtonExample,
    StorybookLink,
    ButtonIconOnlyExample,
    ButtonLoadingExample,
    CheckboxExample,
    FieldExample,
    InputExample,
    LabelExample,
    RadioGroupExample,
    SelectExample,
    SeparatorExample,
    SwitchExample,
    TextareaExample,
    AlertDialogExample,
    DialogExample,
    DropdownMenuExample,
    PopoverExample,
    TabsExample,
    AlertExample,
    BadgeExample,
    AvatarExample,
    SpinnerExample,
    ToastExample,
    TooltipExample,
    ...components,
  }
}
