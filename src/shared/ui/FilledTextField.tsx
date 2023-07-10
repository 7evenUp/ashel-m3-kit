import React, { InputHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import Body from "@/shared/typography/Body"

import UIStateLayer from "@/shared/ui/UIStateLayer"

import { cn } from "@/lib/cn"

const containerVariants = cva(
  "group relative flex h-[56px] bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest rounded-t border-b focus-within:border-b-2 transition-colors duration-short4 ease-standard",
  {
    variants: {
      variant: {
        default:
          "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant border-light-onSurfaceVariant dark:border-dark-onSurfaceVariant focus-within:border-light-primary dark:focus-within:border-dark-primary hover:border-light-onSurface dark:hover:border-dark-onSurface focus-within:hover:border-light-primary dark:focus-within:hover:border-dark-primary",
        error:
          "text-light-error dark:text-dark-error hover:text-light-onErrorContainer dark:hover:text-dark-onErrorContainer focus-within:hover:text-light-error dark:focus-within:hover:text-dark-error border-light-error dark:border-dark-error hover:border-light-onErrorContainer dark:hover:border-dark-onErrorContainer focus-within:hover:border-light-error dark:focus-within:hover:border-dark-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const labelVariants = cva(
  "absolute pointer-events-none text-xs tracking-[0.4px] left-4 translate-y-2 peer-placeholder-shown:translate-y-4 peer-focus:translate-y-2 peer-focus:text-xs peer-focus:tracking-[0.4px] peer-placeholder-shown:text-base peer-placeholder-shown:tracking-[0.5px] transition-all duration-short4 ease-standard",
  {
    variants: {
      variant: {
        default:
          "peer-focus:text-light-primary dark:peer-focus:text-dark-primary",
        error: "peer-focus:text-light-error dark:peer-focus:text-dark-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const inputVariants = cva(
  "peer opacity-100 placeholder-shown:opacity-0 focus:opacity-100 text-light-onSurface dark:text-dark-onSurface pt-6 px-4 pb-2 outline-none text-base tracking-[0.5px] bg-transparent placeholder:text-light-onSurfaceVariant dark:placeholder:text-dark-onSurfaceVariant w-full",
  {
    variants: {
      variant: {
        default: "caret-light-primary dark:caret-dark-primary",
        error: "caret-light-error dark:caret-dark-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const supportingTextVariants = cva("flex items-center gap-4 px-4", {
  variants: {
    variant: {
      default: "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant",
      error: "text-light-error dark:text-dark-error",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface Props
  extends InputHTMLAttributes<HTMLInputElement>,
    Pick<VariantProps<typeof containerVariants>, "variant"> {
  label: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  supportingText?: string
  supportingTextCharCount?: string
}

const FilledTextField = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      label,
      leadingIcon,
      trailingIcon,
      supportingText,
      supportingTextCharCount,
      className,
      variant,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <div
        className={cn("flex flex-col gap-1 w-fit", className)}
        ref={forwardedRef}
      >
        <div className={cn(containerVariants({ variant }))}>
          <UIStateLayer className="bg-light-onSurface dark:bg-dark-onSurface group-active:bg-opacity-[0.08] focus-within:group-hover:bg-opacity-0">
            {leadingIcon && (
              <span className="absolute left-3 top-4">{leadingIcon}</span>
            )}
            {trailingIcon && (
              <span className="absolute right-3 top-4">{trailingIcon}</span>
            )}
            <input
              className={cn(
                inputVariants({ variant }),
                leadingIcon && "pl-[52px]",
                trailingIcon && "pr-[52px]"
              )}
              placeholder="&nbsp;"
              {...props}
            />
            <label
              className={cn(
                labelVariants({ variant }),
                leadingIcon && "left-[52px]"
              )}
            >
              {label}
            </label>
          </UIStateLayer>
        </div>
        {supportingText && (
          <div className={cn(supportingTextVariants({ variant }))}>
            <Body size="small">{supportingText}</Body>
            {supportingTextCharCount && (
              <Body size="small" className="ml-auto">
                {supportingTextCharCount}
              </Body>
            )}
          </div>
        )}
      </div>
    )
  }
)
FilledTextField.displayName = "FilledTextField"

export default FilledTextField
