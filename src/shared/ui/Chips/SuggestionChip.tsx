"use client"

import React from "react"
import * as Toggle from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import Label from "@/shared/typography/Label"

import UIStateLayer from "../UIStateLayer"

import { cn } from "@/lib/cn"

const suggestionChipVariants = cva(
  "group w-fit rounded-lg h-8 outline-none select-none",
  {
    variants: {
      appearance: {
        outlined:
          "border border-outline focus-visible:border-onSurface data-[state=on]:bg-secondaryContainer data-[state=on]:border-0",
        elevated:
          "bg-surfaceContainerLow shadow-elevation1 data-[state=on]:bg-secondaryContainer hover:shadow-elevation2 active:shadow-elevation1",
      },
    },
  }
)

interface SuggestionChipProps
  extends React.ComponentPropsWithoutRef<typeof Toggle.Root>,
    Required<Pick<VariantProps<typeof suggestionChipVariants>, "appearance">> {
  icon?: React.ReactNode
}

const SuggestionChip = React.forwardRef<
  React.ElementRef<typeof Toggle.Root>,
  SuggestionChipProps
>(({ className, appearance, children, icon, ...props }, forwardedRef) => {
  return (
    <Toggle.Root
      className={cn(suggestionChipVariants({ appearance }), className)}
      {...props}
      ref={forwardedRef}
    >
      <UIStateLayer
        className={cn(
          "flex items-center gap-2 px-4 rounded-lg bg-onSurfaceVariant group-focus-visible:bg-onSurfaceVariant group-data-[state=on]:bg-onSecondaryContainer group-data-[state=on]:group-focus-visible:bg-onSecondaryContainer group-focus-visible:bg-opacity-[0.12] group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-focus-visible:bg-opacity-[0.12]",
          icon && "pl-2"
        )}
      >
        {icon && <span className="text-primary">{icon}</span>}
        <Label
          size="large"
          className="text-onSurfaceVariant group-data-[state=on]:text-onSecondaryContainer"
        >
          {children}
        </Label>
      </UIStateLayer>
    </Toggle.Root>
  )
})
SuggestionChip.displayName = "SuggestionChip"

export default SuggestionChip
