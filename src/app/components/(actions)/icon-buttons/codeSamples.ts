export const noToggleButtonCode = `import UIStateLayer from "@/components/ui/UIStateLayer"
import { cn } from "@/utils/classNames"
import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, FC, ReactNode } from "react"

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
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Required<Pick<IconButtonVariantProps, "appearance">> {
  icon: ReactNode
}

const IconButton: FC<Props> = ({ icon, className, appearance, ...props }) => {
  return (
    <button
      className={cn(className, buttonVariants({ appearance }))}
      {...props}
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
}

export default IconButton`

export const toggleButtonCode = `"use client"

import UIStateLayer from "@/components/ui/UIStateLayer"
import { cn } from "@/utils/classNames"
import * as Toggle from "@radix-ui/react-toggle"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

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
>(({ className, appearance, children, ...props }, ref) => (
  <Toggle.Root
    className={cn(buttonVariants({ appearance }), className)}
    {...props}
    ref={ref}
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

export default ToggledIconButton`

export const usageCode = `import IconButton from "@/components/ui/IconButton"
import ToggledIconButton from "@/components/ui/ToggledIconButton"
import { Heart } from "iconoir-react"
...
<IconButton appearance={"filled"} icon={<Heart />} />
<ToggledIconButton appearance="filled">
  <Heart />
</ToggledIconButton>`

export const usageCustomCode = `<ToggledIconButton appearance="filled" defaultPressed>
  <Heart />
</ToggledIconButton>
...
<ToggledIconButton appearance="filled" defaultPressed>
  <Heart className="group-data-[state=on]:fill-light-onPrimary dark:group-data-[state=on]:fill-dark-onPrimary" />
</ToggledIconButton>
`
