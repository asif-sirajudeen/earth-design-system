import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { ButtonExample } from "@/components/button-example"
import {
  AlertDialogExample,
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
  SwitchExample,
  TextareaExample,
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
    TooltipExample,
    ...components,
  }
}
