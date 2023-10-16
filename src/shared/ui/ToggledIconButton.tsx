"use client"

import React, { isValidElement } from "react"
import * as Toggle from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import UIStateLayer from "@/shared/ui/UIStateLayer"

import { cn } from "@/lib/cn"

const buttonVariants = cva(
  "group h-10 w-10 rounded-full disabled:bg-opacity-[0.12] disabled:cursor-not-allowed disabled:text-onSurface disabled:text-opacity-[0.38]",
  {
    variants: {
      appearance: {
        filled:
          "bg-surfaceContainerHighest data-[state=on]:bg-primary text-primary data-[state=on]:text-onPrimary",
        tonal:
          "bg-surfaceContainerHighest data-[state=on]:bg-secondaryContainer text-onSurfaceVariant data-[state=on]:text-onSecondaryContainer",
        outlined:
          "border border-outline disabled:border-opacity-[0.12] data-[state=on]:bg-inverseSurface text-onSurfaceVariant data-[state=on]:text-inverseOnSurface",
        standart: "text-onSurfaceVariant data-[state=on]:text-primary",
      },
    },
  }
)

const uiStateLayerVariants = cva(
  "rounded-full flex items-center justify-center group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-active:bg-opacity-[0.12]",
  {
    variants: {
      appearance: {
        filled:
          "bg-primary group-data-[state=on]:bg-onPrimary data-[state=on]:fill-onPrimary",
        tonal:
          "bg-onSurfaceVariant group-data-[state=on]:bg-onSecondaryContainer",
        outlined:
          "bg-onSurfaceVariant group-data-[state=on]:bg-inverseOnSurface",
        standart: "bg-onSurfaceVariant group-data-[state=on]:bg-primary",
      },
    },
  }
)

const iconFillVariants = cva("", {
  variants: {
    appearance: {
      filled: "group-data-[state=on]:fill-onPrimary",
      tonal: "group-data-[state=on]:fill-onSecondaryContainer",
      outlined: "group-data-[state=on]:fill-inverseOnSurface",
      standart: "group-data-[state=on]:fill-primary",
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
