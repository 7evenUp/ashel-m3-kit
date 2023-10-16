import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import Label from "@/shared/typography/Label"

import UIStateLayer from "@/shared/ui/UIStateLayer"

import { cn } from "@/lib/cn"

const buttonVariants = cva(
  "group h-10 rounded-full w-fit disabled:bg-opacity-[0.12] disabled:cursor-not-allowed disabled:shadow-none disabled:text-onSurface disabled:text-opacity-[0.38] transition-shadow duration-short2 ease-standard",
  {
    variants: {
      appearance: {
        elevated:
          "bg-surfaceContainerLow shadow-elevation1 disabled:bg-primary hover:shadow-elevation2 active:shadow-elevation1 text-primary",
        filled:
          "bg-primary disabled:bg-onSurface hover:shadow-elevation1 active:shadow-none text-onPrimary",
        tonal:
          "bg-secondaryContainer disabled:bg-onSurface hover:shadow-elevation1 active:shadow-none text-onSecondaryContainer",
        outlined:
          "border border-outline disabled:border-onSurface disabled:border-opacity-[0.12] text-primary",
        text: "text-primary",
      },
    },
    defaultVariants: {},
  }
)

// Для стилей State Layer
// (Необходим, так как Button и State Layer в разных состояниях имеют разные свойства background)
const uiStateLayerVariants = cva("rounded-full flex justify-center items-center gap-2 px-6", {
  variants: {
    appearance: {
      elevated: "bg-primary",
      filled: "bg-onPrimary",
      tonal: "bg-onSecondaryContainer",
      outlined: "bg-primary",
      text: "bg-primary px-3",
    },
  },
})

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Required<Pick<VariantProps<typeof buttonVariants>, "appearance">> {
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ icon, children, className, appearance, ...props }, forwardedRef) => {
    return (
      <button
        className={cn(buttonVariants({ appearance }), className)}
        {...props}
        ref={forwardedRef}
      >
        <UIStateLayer
          className={cn(
            uiStateLayerVariants({ appearance }),
            icon && "pl-4",
            icon && appearance === "text" && "pl-3 pr-4"
          )}
        >
          {icon && <span>{icon}</span>}
          <Label size="large">{children}</Label>
        </UIStateLayer>
      </button>
    )
  }
)
Button.displayName = "Button"

export default Button
