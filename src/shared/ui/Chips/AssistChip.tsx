import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import Label from "@/shared/typography/Label"

import UIStateLayer from "../UIStateLayer"

import { cn } from "@/lib/cn"

const assistChipVariants = cva(
  "group w-fit rounded-lg h-8 outline-none select-none",
  {
    variants: {
      appearance: {
        outlined:
          "border border-light-outline dark:border-dark-outline focus-visible:border-light-onSurface dark:focus-visible:border-dark-onSurface",
        elevated:
          "bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow shadow-elevation1 hover:shadow-elevation2 active:shadow-elevation1",
      },
    },
  }
)

interface AssistChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Required<Pick<VariantProps<typeof assistChipVariants>, "appearance">> {
  icon?: React.ReactNode
}

const AssistChip = React.forwardRef<HTMLButtonElement, AssistChipProps>(
  ({ className, appearance, children, icon, ...props }, forwardedRef) => {
    return (
      <button
        className={cn(assistChipVariants({ appearance }), className)}
        {...props}
        ref={forwardedRef}
      >
        <UIStateLayer
          className={cn(
            "flex items-center gap-2 px-4 rounded-lg bg-light-onSurface dark:bg-dark-onSurface group-focus-visible:bg-light-onSurface dark:group-focus-visible:bg-dark-onSurface group-focus-visible:bg-opacity-[0.12] dark:group-focus-visible:bg-opacity-[0.12]",
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
            className="text-light-onSurface dark:text-dark-onSurface"
          >
            {children}
          </Label>
        </UIStateLayer>
      </button>
    )
  }
)
AssistChip.displayName = "AssistChip"

export default AssistChip
