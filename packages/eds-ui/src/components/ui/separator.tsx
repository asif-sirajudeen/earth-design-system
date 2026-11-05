"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"
import { cn } from "cn"

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "ui:shrink-0 ui:bg-border ui:data-horizontal:h-px ui:data-horizontal:w-full ui:data-vertical:w-px ui:data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
