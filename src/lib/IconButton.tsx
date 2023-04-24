import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import UIStateLayer from "@/components/ui/UIStateLayer"

import { cn } from "@/utils/classNames"

const buttonVariants = cva(
  "group h-10 w-10 rounded-full disabled:bg-opacity-[0.12] dark:disabled:bg-opacity-[0.12] disabled:cursor-not-allowed  disabled:text-light-onSurface disabled:dark:text-dark-onSurface disabled:text-opacity-[0.38] disabled:dark:text-opacity-[0.38]",
  {
    variants: {
      appearance: {
        filled:
          "bg-light-primary dark:bg-dark-primary disabled:bg-light-onSurface disabled:dark:bg-dark-onSurface   text-light-onPrimary dark:text-dark-onPrimary",
        tonal:
          "bg-light-secondaryContainer dark:bg-dark-secondaryContainer disabled:bg-light-onSurface disabled:dark:bg-dark-onSurface text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer",
        outlined:
          "border border-light-outline dark:border-dark-outline disabled:border-opacity-[0.12] dark:disabled:border-opacity-[0.12] text-light-primary dark:text-dark-primary",
        standart: "text-light-primary dark:text-dark-primary",
      },
    },
    defaultVariants: {},
  }
)

const uiStateLayerVariants = cva("", {
  variants: {
    appearance: {
      filled: "bg-light-onPrimary dark:bg-dark-onPrimary",
      tonal: "bg-light-onSecondaryContainer dark:bg-dark-onSecondaryContainer",
      outlined: "bg-light-primary dark:bg-dark-primary",
      standart: "bg-light-primary dark:bg-dark-primary px-3",
    },
  },
  defaultVariants: {},
})

type IconButtonVariantProps = VariantProps<typeof buttonVariants>

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Required<Pick<IconButtonVariantProps, "appearance">> {
  icon: React.ReactNode
}

const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ icon, className, appearance, ...props }, forwardedRef) => (
    <button
      className={cn(className, buttonVariants({ appearance }))}
      {...props}
      ref={forwardedRef}
    >
      <UIStateLayer
        className={cn(
          "rounded-full flex items-center justify-center",
          uiStateLayerVariants({ appearance })
        )}
      >
        <span>{icon}</span>
      </UIStateLayer>
    </button>
  )
)
IconButton.displayName = "IconButton"

export default IconButton
