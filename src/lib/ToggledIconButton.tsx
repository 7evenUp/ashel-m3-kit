"use client"

import React, { isValidElement } from "react"
import * as Toggle from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import UIStateLayer from "@/components/ui/UIStateLayer"

import { cn } from "@/utils/classNames"

const buttonVariants = cva(
  "group h-10 w-10 rounded-full disabled:bg-opacity-[0.12] dark:disabled:bg-opacity-[0.12] disabled:cursor-not-allowed disabled:text-light-onSurface disabled:dark:text-dark-onSurface disabled:text-opacity-[0.38] disabled:dark:text-opacity-[0.38]",
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
  }
)

const uiStateLayerVariants = cva(
  "rounded-full flex items-center justify-center group-data-[state=on]:bg-opacity-0 dark:group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] dark:group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-active:bg-opacity-[0.12] dark:group-data-[state=on]:group-active:bg-opacity-[0.12]",
  {
    variants: {
      appearance: {
        filled:
          "bg-light-primary dark:bg-dark-primary group-data-[state=on]:bg-light-onPrimary dark:group-data-[state=on]:bg-dark-onPrimary data-[state=on]:fill-light-onPrimary",
        tonal:
          "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant group-data-[state=on]:bg-light-onSecondaryContainer dark:group-data-[state=on]:bg-dark-onSecondaryContainer",
        outlined:
          "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant group-data-[state=on]:bg-light-inverseOnSurface dark:group-data-[state=on]:bg-dark-inverseOnSurface",
        standart:
          "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant group-data-[state=on]:bg-light-primary dark:group-data-[state=on]:bg-dark-primary",
      },
    },
  }
)

const iconFillVariants = cva("", {
  variants: {
    appearance: {
      filled:
        "group-data-[state=on]:fill-light-onPrimary dark:group-data-[state=on]:fill-dark-onPrimary",
      tonal:
        "group-data-[state=on]:fill-light-onSecondaryContainer dark:group-data-[state=on]:fill-dark-onSecondaryContainer",
      outlined:
        "group-data-[state=on]:fill-light-inverseOnSurface dark:group-data-[state=on]:fill-dark-inverseOnSurface",
      standart:
        "group-data-[state=on]:fill-light-primary dark:group-data-[state=on]:fill-dark-primary",
    },
  },
})

interface Props
  extends React.ComponentPropsWithoutRef<typeof Toggle.Root>,
    Required<Pick<VariantProps<typeof buttonVariants>, "appearance">> {}

const ToggledIconButton = React.forwardRef<
  React.ElementRef<typeof Toggle.Root>,
  Props
>(({ className, appearance, children, ...props }, forwardedRef) => {
  const isChildIcon = isValidElement(children)
  if (!isChildIcon) throw Error("Child must be a React Element")

  const clonedChildren = React.cloneElement(children, {
    // @ts-expect-error Props types
    className: cn(iconFillVariants({ appearance })),
  })

  return (
    <Toggle.Root
      className={cn(buttonVariants({ appearance }), className)}
      {...props}
      ref={forwardedRef}
    >
      <UIStateLayer className={cn(uiStateLayerVariants({ appearance }))}>
        {clonedChildren}
      </UIStateLayer>
    </Toggle.Root>
  )
})
ToggledIconButton.displayName = Toggle.Root.displayName

export default ToggledIconButton
