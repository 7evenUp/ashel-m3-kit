import Label from "@/components/ui/text/Label"
import UIStateLayer from "@/components/ui/UIStateLayer"
import { cn } from "@/utils/classNames"
import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, FC, ReactNode } from "react"

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

const uiStateLayerVariants = cva("", {
  variants: {
    appearance: {
      elevated: "bg-light-primary dark:bg-dark-primary",
      filled: "bg-light-onPrimary dark:bg-dark-onPrimary",
      tonal: "bg-light-onSecondaryContainer dark:bg-dark-onSecondaryContainer",
      outlined: "bg-light-primary dark:bg-dark-primary",
      text: "bg-light-primary dark:bg-dark-primary px-3",
    },
  },
  defaultVariants: {},
})

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode
}

const Button: FC<Props> = ({
  icon,
  children,
  className,
  appearance,
  ...props
}) => {
  return (
    <button
      className={cn(className, buttonVariants({ appearance }))}
      {...props}
    >
      <UIStateLayer
        className={cn(
          "rounded-full flex items-center gap-2 px-6",
          icon && "pl-4",
          uiStateLayerVariants({ appearance }),
          icon && appearance === "text" && "pr-4"
        )}
      >
        {icon && <span>{icon}</span>}
        <Label size="large">{children}</Label>
      </UIStateLayer>
    </button>
  )
}

export default Button
