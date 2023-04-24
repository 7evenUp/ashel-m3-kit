"use client"

import React from "react"
import * as Toggle from "@radix-ui/react-toggle"
import { cva, VariantProps } from "class-variance-authority"

import UIStateLayer from "@/components/ui/UIStateLayer"

import { cn } from "@/utils/classNames"

const buttonVariants = cva(
  "group h-10 w-10 rounded-full disabled:bg-opacity-[0.12] dark:disabled:bg-opacity-[0.12] disabled:cursor-not-allowed  disabled:text-light-onSurface disabled:dark:text-dark-onSurface disabled:text-opacity-[0.38] disabled:dark:text-opacity-[0.38]",
  {
    variants: {
      appearance: {
        filled:
          "bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest data-[state=on]:bg-light-primary dark:data-[state=on]:bg-dark-primary text-light-primary dark:text-dark-primary data-[state=on]:text-light-onPrimary dark:data-[state=on]:text-dark-onPrimary",
        tonal:
          "bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest data-[state=on]:bg-light-secondaryContainer dark:data-[state=on]:bg-dark-secondaryContainer text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant data-[state=on]:text-light-onSecondaryContainer dark:data-[state=on]:text-dark-onSecondaryContainer",
        outlined:
          "border border-light-outline dark:border-dark-outline disabled:border-opacity-[0.12] dark:disabled:border-opacity-[0.12] data-[state=on]:bg-light-inverseSurface dark:data-[state=on]:bg-dark-inverseSurface text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant data-[state=on]:text-light-inverseOnSurface dark:data-[state=on]:text-dark-inverseOnSurface",
        standart:
          "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant data-[state=on]:text-light-primary dark:data-[state=on]:text-dark-primary",
      },
    },
    defaultVariants: {},
  }
)

const uiStateLayerVariants = cva(
  "group-data-[state=on]:bg-opacity-0 dark:group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] dark:group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-active:bg-opacity-[0.12] dark:group-data-[state=on]:group-active:bg-opacity-[0.12]",
  {
    variants: {
      appearance: {
        filled:
          "bg-light-primary dark:bg-dark-primary group-data-[state=on]:bg-light-onPrimary dark:group-data-[state=on]:bg-dark-onPrimary",
        tonal:
          "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant group-data-[state=on]:bg-light-onSecondaryContainer dark:group-data-[state=on]:bg-dark-onSecondaryContainer",
        outlined:
          "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant group-data-[state=on]:bg-light-inverseOnSurface dark:group-data-[state=on]:bg-dark-inverbg-light-inverseOnSurface",
        standart:
          "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant group-data-[state=on]:bg-light-primary dark:group-data-[state=on]:bg-dark-inverbg-light-primary",
      },
    },
    defaultVariants: {},
  }
)

interface Props
  extends React.ComponentPropsWithoutRef<typeof Toggle.Root>,
    Required<Pick<VariantProps<typeof buttonVariants>, "appearance">> {}

const ToggledIconButton = React.forwardRef<
  React.ElementRef<typeof Toggle.Root>,
  Props
>(({ className, appearance, children, ...props }, forwardedRef) => (
  <Toggle.Root
    className={cn(buttonVariants({ appearance }), className)}
    {...props}
    ref={forwardedRef}
  >
    <UIStateLayer
      className={cn(
        "rounded-full flex items-center justify-center",
        uiStateLayerVariants({ appearance })
      )}
    >
      {children}
    </UIStateLayer>
  </Toggle.Root>
))
ToggledIconButton.displayName = Toggle.Root.displayName

export default ToggledIconButton
