"use client"

import React from "react"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { cva, type VariantProps } from "class-variance-authority"

import Label from "@/shared/typography/Label"

import UIStateLayer from "@/shared/ui/UIStateLayer"

import { cn } from "@/lib/cn"

const segmentedRootVariants = cva(
  "flex border border-outline rounded-full divide-x divide-outline min-w-[200px]",
  {
    variants: {
      density: {
        "0": "h-10",
        "-1": "h-9",
        "-2": "h-8",
        "-3": "h-7",
      },
    },
    defaultVariants: {
      density: "0",
    },
  }
)

const SegmentedRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Root> &
    VariantProps<typeof segmentedRootVariants>
>(({ className, density, ...props }, forwardedRef) => (
  <ToggleGroup.Root
    className={cn(segmentedRootVariants({ density }), className)}
    {...props}
    ref={forwardedRef}
  />
))
SegmentedRoot.displayName = "SegmentedRoot"

interface SegmentedButtonProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroup.Item> {
  icon?: React.ReactNode
}

const SegmentedButton = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Item>,
  SegmentedButtonProps
>(({ className, children, icon, ...props }, forwardedRef) => (
  <ToggleGroup.Item
    className={cn("group", className)}
    {...props}
    ref={forwardedRef}
    asChild
  >
    <button className="flex-1 text-onSurface data-[state=on]:text-onSecondaryContainer data-[state=on]:bg-secondaryContainer first:rounded-l-full last:rounded-r-full transition-colors duration-short4 ease-standard">
      <UIStateLayer className="flex justify-center items-center gap-2 py-2 px-3 bg-onSurface group-data-[state=on]:bg-onSecondaryContainer group-first:rounded-l-full group-last:rounded-r-full group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-active:bg-opacity-[0.12]">
        {icon && icon}
        <Label size={"large"}>{children}</Label>
      </UIStateLayer>
    </button>
  </ToggleGroup.Item>
))
SegmentedButton.displayName = "SegmentedButton"

export { SegmentedButton, SegmentedRoot }
