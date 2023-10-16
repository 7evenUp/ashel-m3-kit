import React, { InputHTMLAttributes } from "react"
import { type VariantProps, cva } from "class-variance-authority"

import Body from "@/shared/typography/Body"

import { cn } from "@/lib/cn"

const containerVariants = cva(
  "group relative flex h-[56px] rounded ring-1 ring-offset-0 focus-within:ring-2 transition-colors duration-short4 ease-standard",
  {
    variants: {
      variant: {
        default:
          "text-onSurfaceVariant ring-outline focus-within:ring-primary hover:ring-onSurface focus-within:hover:ring-primary",
        error:
          "text-error hover:text-onErrorContainer focus-within:hover:text-error ring-error hover:ring-onErrorContainer focus-within:hover:ring-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const labelVariants = cva(
  "absolute pointer-events-none text-xs tracking-[0.4px] translate-x-3 px-1 -translate-y-2 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:tracking-[0.5px] peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:tracking-[0.4px] will-change-transform bg-surface transition-all duration-short4 ease-standard",
  {
    variants: {
      variant: {
        default: "peer-focus:text-primary",
        error: "peer-focus:text-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const inputVariants = cva(
  "peer opacity-100 placeholder-shown:opacity-0 focus:opacity-100 text-onSurface pt-4 px-4 pb-4 outline-none text-base tracking-[0.5px] bg-transparent placeholder:text-onSurfaceVariant w-full",
  {
    variants: {
      variant: {
        default: "caret-primary",
        error: "caret-error",
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
      default: "text-onSurfaceVariant",
      error: "text-error",
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

const OutlinedTextField = React.forwardRef<HTMLDivElement, Props>(
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
              leadingIcon && "translate-x-[52px] peer-focus:translate-x-3"
            )}
          >
            {label}
          </label>
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
OutlinedTextField.displayName = "OutlinedTextField"

export default OutlinedTextField
