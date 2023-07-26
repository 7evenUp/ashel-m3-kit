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
          "border border-light-outline dark:border-dark-outline focus-visible:border-light-onSurface dark:focus-visible:border-dark-onSurface data-[state=on]:bg-light-secondaryContainer dark:data-[state=on]:bg-dark-secondaryContainer data-[state=on]:border-0",
        elevated:
          "bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow shadow-elevation1 data-[state=on]:bg-light-secondaryContainer dark:data-[state=on]:bg-dark-secondaryContainer hover:shadow-elevation2 active:shadow-elevation1",
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
>(
  (
    { className, appearance, children, icon, ...props },
    forwardedRef
  ) => {
    return (
      <Toggle.Root
        className={cn(suggestionChipVariants({ appearance }), className)}
        {...props}
        ref={forwardedRef}
      >
        <UIStateLayer
          className={cn(
            "flex items-center gap-2 px-4 rounded-lg bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant group-focus-visible:bg-light-onSurfaceVariant dark:group-focus-visible:bg-dark-onSurfaceVariant group-data-[state=on]:bg-light-onSecondaryContainer dark:group-data-[state=on]:bg-dark-onSecondaryContainer group-data-[state=on]:group-focus-visible:bg-light-onSecondaryContainer dark:group-data-[state=on]:group-focus-visible:bg-dark-onSecondaryContainer group-focus-visible:bg-opacity-[0.12] dark:group-focus-visible:bg-opacity-[0.12] group-data-[state=on]:bg-opacity-0 dark:group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] dark:group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-focus-visible:bg-opacity-[0.12] dark:group-data-[state=on]:group-focus-visible:bg-opacity-[0.12]",
            icon && "pl-2"
          )}
        >
          {icon && (
            <span className="text-light-primary dark:text-dark-primary">
              {icon}
            </span>
          )}
          <Label
            size="large"
            className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant group-data-[state=on]:text-light-onSecondaryContainer dark:group-data-[state=on]:text-dark-onSecondaryContainer"
          >
            {children}
          </Label>
        </UIStateLayer>
      </Toggle.Root>
    )
  }
)
SuggestionChip.displayName = "SuggestionChip"

export default SuggestionChip
