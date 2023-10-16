"use client"

import React from "react"
import * as RadixRadioGroup from "@radix-ui/react-radio-group"

import Label from "@/shared/typography/Label"

import UIStateLayer from "@/shared/ui/UIStateLayer"

import { cn } from "@/lib/cn"

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Root>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>
>(({ className, children, ...props }, forwardedRef) => (
  <RadixRadioGroup.Root
    className={cn("flex flex-col gap-3", className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </RadixRadioGroup.Root>
))
RadioGroup.displayName = "RadioGroup"

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item>
>(({ className, children, id, ...props }, forwardedRef) => (
  <div className={cn("flex items-center gap-4", className)}>
    <RadixRadioGroup.Item
      className="group relative w-5 h-5 rounded-full border-2 border-onSurfaceVariant data-[state=checked]:border-primary transition-colors duration-short4 ease-standard"
      ref={forwardedRef}
      id={id}
      {...props}
    >
      <UIStateLayer className="flex items-center justify-center h-10 w-10 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-data-[state=checked]:bg-primary bg-onSurface group-data-[state=checked]:bg-opacity-0 group-data-[state=checked]:group-hover:bg-opacity-[0.08] group-data-[state=checked]:group-active:bg-opacity-[0.12] transition-colors duration-short4 ease-standard">
        <RadixRadioGroup.Indicator className="w-[10px] h-[10px] bg-primary rounded-full animate-fade-in" />
      </UIStateLayer>
    </RadixRadioGroup.Item>
    <RadioGroupLabel htmlFor={id}>{children}</RadioGroupLabel>
  </div>
))
RadioGroupItem.displayName = "RadioGroupItem"

const RadioGroupLabel: React.FC<
  React.LabelHTMLAttributes<HTMLLabelElement>
> = ({ className, children, htmlFor }) => (
  <label htmlFor={htmlFor}>
    <Label size={"large"} className={cn(className)}>
      {children}
    </Label>
  </label>
)
