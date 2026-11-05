import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { ButtonExample } from "@/components/button-example"
import { StorybookLink } from "@/components/storybook-link"

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return { ...defaultMdxComponents, ButtonExample, StorybookLink, ...components }
}
