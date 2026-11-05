import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { ButtonExample } from "@/components/button-example"
import {
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
    ...components,
  }
}
