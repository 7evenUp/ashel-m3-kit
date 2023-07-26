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
          "group w-fit rounded-lg h-8 outline-none select-none border border-light-outline dark:border-dark-outline focus-visible:border-light-onSurface dark:focus-visible:border-dark-onSurface data-[state=on]:bg-light-secondaryContainer dark:data-[state=on]:bg-dark-secondaryContainer data-[state=on]:border-0",
          avatar && "rounded-full",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <UIStateLayer
          className={cn(
            "flex items-center gap-2 px-4 rounded-lg bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant group-focus-visible:bg-light-onSurfaceVariant dark:group-focus-visible:bg-dark-onSurfaceVariant group-data-[state=on]:bg-light-onSecondaryContainer dark:group-data-[state=on]:bg-dark-onSecondaryContainer group-data-[state=on]:group-focus-visible:bg-light-onSecondaryContainer dark:group-data-[state=on]:group-focus-visible:bg-dark-onSecondaryContainer group-focus-visible:bg-opacity-[0.12] dark:group-focus-visible:bg-opacity-[0.12] group-data-[state=on]:bg-opacity-0 dark:group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] dark:group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-focus-visible:bg-opacity-[0.12] dark:group-data-[state=on]:group-focus-visible:bg-opacity-[0.12]",
            avatar && "rounded-full pl-1",
            leadingIcon && "pl-2",
            trailingIcon && "pr-2"
          )}
        >
          {leadingIcon && (
            <span className="text-light-primary dark:text-dark-primary">
              {leadingIcon}
            </span>
          )}
          {avatar && avatar}
          <Label
            size="large"
            className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant group-data-[state=on]:text-light-onSecondaryContainer dark:group-data-[state=on]:text-dark-onSecondaryContainer"
          >
            {children}
          </Label>
          {trailingIcon && (
            <span className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant group-hover:text-light-onSurface dark:group-hover:text-dark-onSurface group-focus-visible:text-light-onSurface dark:group-focus-visible:text-dark-onSurface group-data-[state=on]:text-light-onSecondaryContainer dark:group-data-[state=on]:text-dark-onSecondaryContainer">
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
