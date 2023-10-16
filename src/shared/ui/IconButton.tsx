import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import UIStateLayer from "@/shared/ui/UIStateLayer"

import { cn } from "@/lib/cn"

const buttonVariants = cva(
  "group h-10 w-10 rounded-full disabled:bg-opacity-[0.12] disabled:cursor-not-allowed disabled:text-onSurface disabled:text-opacity-[0.38]",
  {
    variants: {
      appearance: {
        filled: "bg-primary disabled:bg-onSurface text-onPrimary",
        tonal:
          "bg-secondaryContainer disabled:bg-onSurface text-onSecondaryContainer",
        outlined:
          "border border-outline disabled:border-opacity-[0.12] text-primary",
        standart: "text-primary",
      },
    },
  }
)

const uiStateLayerVariants = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      appearance: {
        filled: "bg-onPrimary",
        tonal: "bg-onSecondaryContainer",
        outlined: "bg-primary",
        standart: "bg-primary px-3",
      },
    },
  }
)

type IconButtonVariantProps = VariantProps<typeof buttonVariants>

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Required<Pick<IconButtonVariantProps, "appearance">> {
  icon: React.ReactNode
}

const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ icon, className, appearance, ...props }, forwardedRef) => (
    <button
      className={cn(buttonVariants({ appearance }), className)}
      {...props}
      ref={forwardedRef}
    >
      <UIStateLayer className={cn(uiStateLayerVariants({ appearance }))}>
        <span>{icon}</span>
      </UIStateLayer>
    </button>
  )
)
IconButton.displayName = "IconButton"

export default IconButton
