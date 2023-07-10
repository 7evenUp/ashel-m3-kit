"use client"

import React from "react"
import * as ToggleGroup from "@radix-ui/react-toggle-group"

import Label from "@/shared/typography/Label"

import UIStateLayer from "@/shared/ui/UIStateLayer"

import { cn } from "@/lib/cn"

const SegmentedRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Root>
>(({ className, ...props }, forwardedRef) => (
  <ToggleGroup.Root
    className={cn(
      "flex border border-light-outline dark:border-dark-outline rounded-full divide-x divide-light-outline dark:divide-dark-outline",
      className
    )}
    {...props}
    ref={forwardedRef}
  />
))
SegmentedRoot.displayName = ToggleGroup.Root.displayName

const SegmentedButton = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Item>
>(({ className, type, children, ...props }, forwardedRef) => (
  <ToggleGroup.Item
    className={cn("group", className)}
    {...props}
    ref={forwardedRef}
    asChild
  >
    <button
      className="flex-1 text-light-onSurface dark:text-dark-onSurface data-[state=on]:text-light-onSecondaryContainer dark:data-[state=on]:text-dark-onSecondaryContainer data-[state=on]:bg-light-secondaryContainer dark:data-[state=on]:bg-dark-secondaryContainer first:rounded-l-full last:rounded-r-full transition-colors duration-short4 ease-standard"
      type="button"
    >
      <UIStateLayer className="py-2 px-3 text-center bg-light-onSurface dark:bg-dark-onSurface group-data-[state=on]:bg-light-onSecondaryContainer dark:group-data-[state=on]:bg-dark-onSecondaryContainer group-first:rounded-l-full group-last:rounded-r-full group-data-[state=on]:bg-opacity-0 dark:group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-active:bg-opacity-[0.12] dark:group-data-[state=on]:group-hover:bg-opacity-[0.08] dark:group-data-[state=on]:group-active:bg-opacity-[0.12]">
        <Label size={"large"}>{children}</Label>
      </UIStateLayer>
    </button>
  </ToggleGroup.Item>
))
SegmentedButton.displayName = ToggleGroup.Item.displayName

export { SegmentedButton, SegmentedRoot }
