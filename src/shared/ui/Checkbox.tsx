"use client"

import React from "react"

import * as RadixCheckbox from "@radix-ui/react-checkbox"
import { Check } from "iconoir-react"

import Label from "@/shared/typography/Label"

import UIStateLayer from "@/shared/ui/UIStateLayer"

import { cn } from "@/lib/cn"

export const CheckboxLabel: React.FC<
  React.LabelHTMLAttributes<HTMLLabelElement>
> = ({ className, children, ...props }) => (
  <label {...props}>
    <Label size={"large"} className={cn(className)}>
      {children}
    </Label>
  </label>
)

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root>
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixCheckbox.Root
      {...props}
      ref={forwardedRef}
      className={cn(
        "relative group w-[18px] h-[18px] border-2 border-light-onSurface dark:border-dark-onSurface rounded-sm data-[state=checked]:bg-light-primary dark:data-[state=checked]:bg-dark-primary data-[state=checked]:border-0 transition-colors duration-short4 ease-standard",
        className
      )}
    >
      <UIStateLayer className="flex items-center justify-center h-10 w-10 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-data-[state=checked]:bg-light-primary dark:data-[state=checked]:bg-dark-primary bg-light-onSurface dark:bg-dark-onSurface group-data-[state=checked]:bg-opacity-0 group-data-[state=checked]:group-hover:bg-opacity-[0.08] group-data-[state=checked]:group-active:bg-opacity-[0.12] transition-colors duration-short4 ease-standard">
        <RadixCheckbox.Indicator className="data-[state=checked]:text-light-onPrimary dark:data-[state=checked]:text-dark-onPrimary animate-fade-in">
          <Check width={18} height={18} />
        </RadixCheckbox.Indicator>
      </UIStateLayer>
    </RadixCheckbox.Root>
  )
})
Checkbox.displayName = "Checkbox"
