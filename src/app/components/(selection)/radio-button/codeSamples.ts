export const sourceCode = `"use client"

import React, { FC, LabelHTMLAttributes } from "react"
import * as RadixRadioGroup from "@radix-ui/react-radio-group"
import UIStateLayer from "@/components/ui/UIStateLayer"
import { cn } from "@/utils/classNames"
import Label from "@/components/ui/text/Label"

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Root>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>
>(({ className, children, ...props }, ref) => (
  <RadixRadioGroup.Root
    className={cn("flex flex-col gap-3", className)}
    {...props}
    ref={ref}
  >
    {children}
  </RadixRadioGroup.Root>
))

RadioGroup.displayName = "RadioGroup"

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item>
>(({ className, children, id, ...props }, ref) => (
  <div className={cn("flex items-center gap-4", className)}>
    <RadixRadioGroup.Item
      className="group relative w-5 h-5 rounded-full border-2 border-light-onSurfaceVariant dark:border-dark-onSurfaceVariant data-[state=checked]:border-light-primary dark:data-[state=checked]:border-dark-primary"
      ref={ref}
      id={id}
      {...props}
    >
      <UIStateLayer className="flex items-center justify-center h-10 w-10 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-data-[state=checked]:bg-light-primary dark:data-[state=checked]:bg-dark-primary bg-light-onSurface dark:bg-dark-onSurface group-data-[state=checked]:bg-opacity-0 group-data-[state=checked]:group-hover:bg-opacity-[0.08] group-data-[state=checked]:group-active:bg-opacity-[0.12]">
        <RadixRadioGroup.Indicator className="w-[10px] h-[10px] bg-light-primary dark:bg-dark-primary rounded-full" />
      </UIStateLayer>
    </RadixRadioGroup.Item>
    <RadioGroupLabel htmlFor={id}>{children}</RadioGroupLabel>
  </div>
))

RadioGroupItem.displayName = "RadioGroupItem"

const RadioGroupLabel: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  children,
  htmlFor,
}) => (
  <label htmlFor={htmlFor}>
    <Label size={"large"} className={cn(className)}>
      {children}
    </Label>
  </label>
)`

export const usageCode = `<RadioGroup>
  <RadioGroupItem value="x" id="x">
    First
  </RadioGroupItem>
  <RadioGroupItem value="y" id="y">
    Second
  </RadioGroupItem>
  <RadioGroupItem value="z" id="z">
    Third
  </RadioGroupItem>
</RadioGroup>`