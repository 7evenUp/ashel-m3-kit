export const buttonCode = `import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import Label from "@/components/typography/Label"

import UIStateLayer from "@/components/ui/UIStateLayer"

import { cn } from "@/utils/classNames"

const buttonVariants = cva(
  "group h-10 rounded-full w-fit disabled:bg-opacity-[0.12] dark:disabled:bg-opacity-[0.12] disabled:cursor-not-allowed disabled:shadow-none disabled:text-light-onSurface disabled:dark:text-dark-onSurface disabled:text-opacity-[0.38] disabled:dark:text-opacity-[0.38] transition-shadow",
  {
    variants: {
      appearance: {
        elevated:
          "bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow shadow-elevation1 disabled:bg-light-primary disabled:dark:bg-dark-primary hover:shadow-elevation2 active:shadow-elevation1 text-light-primary dark:text-dark-primary",
        filled:
          "bg-light-primary dark:bg-dark-primary disabled:bg-light-onSurface disabled:dark:bg-dark-onSurface hover:shadow-elevation1 active:shadow-none text-light-onPrimary dark:text-dark-onPrimary",
        tonal:
          "bg-light-secondaryContainer dark:bg-dark-secondaryContainer disabled:bg-light-onSurface disabled:dark:bg-dark-onSurface hover:shadow-elevation1 active:shadow-none text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer",
        outlined:
          "border border-light-outline dark:border-dark-outline disabled:border-light-onSurface disabled:dark:border-dark-onSurface disabled:border-opacity-[0.12] dark:disabled:border-opacity-[0.12] text-light-primary dark:text-dark-primary",
        text: "text-light-primary dark:text-dark-primary",
      },
    },
    defaultVariants: {},
  }
)

// Для стилей State Layer
// (Необходим, так как Button и State Layer в разных состояниях имеют разные свойства background)
const uiStateLayerVariants = cva("rounded-full flex items-center gap-2 px-6", {
  variants: {
    appearance: {
      elevated: "bg-light-primary dark:bg-dark-primary",
      filled: "bg-light-onPrimary dark:bg-dark-onPrimary",
      tonal: "bg-light-onSecondaryContainer dark:bg-dark-onSecondaryContainer",
      outlined: "bg-light-primary dark:bg-dark-primary",
      text: "bg-light-primary dark:bg-dark-primary px-3",
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
        className={cn(className, buttonVariants({ appearance }))}
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

export default Button`

export const usageCode = `import Button from "@/components/ui/Button"
...
{/* elevated */}
<Button appearance='elevated'>Elevated button</Button>
{/* filled */}
<Button appearance='filled'>Filled button</Button>
{/* disabled tonal */}
<Button appearance='tonal' disabled>Tonal button</Button>
{/* with onClick */}
<Button appearance='outlined' onClick={() => {}}>Outlined button</Button>
{/* button type (submit by default as regular html) */}
<Button appearance='text' type="button">Text button</Button>`

export const usageWithIconsCode = `import { Plus } from "iconoir-react"
...
<Button appearance="filled" icon={<Plus />}>
  Filled
</Button>`