"use client"

import React from "react"
import * as Toggle from "@radix-ui/react-toggle"

import Label from "@/shared/typography/Label"

import UIStateLayer from "../UIStateLayer"

import { cn } from "@/lib/cn"

interface InputChipProps
  extends React.ComponentPropsWithoutRef<typeof Toggle.Root> {
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  avatar?: React.ReactNode
}

const InputChip = React.forwardRef<
  React.ElementRef<typeof Toggle.Root>,
  InputChipProps
>(
  (
    { className, children, leadingIcon, trailingIcon, avatar, ...props },
    forwardedRef
  ) => {
    return (
      <Toggle.Root
        className={cn(
          "group w-fit rounded-lg h-8 outline-none select-none border border-outline focus-visible:border-onSurface data-[state=on]:bg-secondaryContainer data-[state=on]:border-0",
          avatar && "rounded-full",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <UIStateLayer
          className={cn(
            "flex items-center gap-2 px-4 rounded-lg bg-onSurfaceVariant group-focus-visible:bg-onSurfaceVariant group-data-[state=on]:bg-onSecondaryContainer group-data-[state=on]:group-focus-visible:bg-onSecondaryContainer group-focus-visible:bg-opacity-[0.12] group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-focus-visible:bg-opacity-[0.12]",
            avatar && "rounded-full pl-1",
            leadingIcon && "pl-2",
            trailingIcon && "pr-2"
          )}
        >
          {leadingIcon && <span className="text-primary">{leadingIcon}</span>}
          {avatar && avatar}
          <Label
            size="large"
            className="text-onSurfaceVariant group-data-[state=on]:text-onSecondaryContainer"
          >
            {children}
          </Label>
          {trailingIcon && (
            <span className="text-onSurfaceVariant group-hover:text-onSurface group-focus-visible:text-onSurface group-data-[state=on]:text-onSecondaryContainer">
              {trailingIcon}
            </span>
          )}
        </UIStateLayer>
      </Toggle.Root>
    )
  }
)
InputChip.displayName = "InputChip"

export default InputChip
