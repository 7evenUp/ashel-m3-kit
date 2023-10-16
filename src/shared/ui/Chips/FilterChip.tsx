"use client"

import React from "react"
import * as Toggle from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { Check } from "iconoir-react"

import Label from "@/shared/typography/Label"

import UIStateLayer from "../UIStateLayer"

import { cn } from "@/lib/cn"

const filterChipVariants = cva(
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

interface FilterChipProps
  extends React.ComponentPropsWithoutRef<typeof Toggle.Root>,
    Required<Pick<VariantProps<typeof filterChipVariants>, "appearance">> {
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

const FilterChip = React.forwardRef<
  React.ElementRef<typeof Toggle.Root>,
  FilterChipProps
>(
  (
    {
      className,
      appearance,
      children,
      leadingIcon,
      trailingIcon,
      pressed,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <Toggle.Root
        className={cn(filterChipVariants({ appearance }), className)}
        {...props}
        ref={forwardedRef}
      >
        <UIStateLayer
          className={cn(
            "flex items-center gap-2 px-4 rounded-lg bg-onSurfaceVariant group-focus-visible:bg-onSurfaceVariant group-data-[state=on]:bg-onSecondaryContainer group-data-[state=on]:group-focus-visible:bg-onSecondaryContainer group-focus-visible:bg-opacity-[0.12] group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-focus-visible:bg-opacity-[0.12]",
            (leadingIcon || pressed) && "pl-2",
            trailingIcon && "pr-2"
          )}
        >
          {pressed ? (
            <span className="text-primary group-data-[state=on]:text-onSecondaryContainer">
              <Check width={18} height={18} />
            </span>
          ) : (
            leadingIcon && (
              <span className="text-primary group-data-[state=on]:text-onSecondaryContainer">
                {leadingIcon}
              </span>
            )
          )}
          <Label
            size="large"
            className="text-onSurfaceVariant group-hover:text-onSurface group-focus-visible:text-onSurface group-data-[state=on]:text-onSecondaryContainer"
          >
            {children}
          </Label>
          {trailingIcon && (
            <span className="text-onSurface group-data-[state=on]:text-onSecondaryContainer">
              {trailingIcon}
            </span>
          )}
        </UIStateLayer>
      </Toggle.Root>
    )
  }
)
FilterChip.displayName = "FilterChip"

export default FilterChip
