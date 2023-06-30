import React, { FC, InputHTMLAttributes } from "react"
import { type VariantProps, cva } from "class-variance-authority"

import Body from "@/components/typography/Body"

import { cn } from "@/utils/classNames"

const containerVariants = cva(
  "group relative flex h-[56px] rounded ring-1 ring-offset-0 focus-within:ring-2",
  {
    variants: {
      variant: {
        default:
          "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant ring-light-outline dark:ring-dark-outline focus-within:ring-light-primary dark:focus-within:ring-dark-primary hover:ring-light-onSurface dark:hover:ring-dark-onSurface focus-within:hover:ring-light-primary dark:focus-within:hover:ring-dark-primary",
        error:
          "text-light-error dark:text-dark-error hover:text-light-onErrorContainer dark:hover:text-dark-onErrorContainer focus-within:hover:text-light-error dark:focus-within:hover:text-dark-error ring-light-error dark:ring-dark-error hover:ring-light-onErrorContainer dark:hover:ring-dark-onErrorContainer focus-within:hover:ring-light-error dark:focus-within:hover:ring-dark-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const labelVariants = cva(
  "absolute pointer-events-none text-xs tracking-[0.4px] translate-x-3 px-1 -translate-y-2 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:tracking-[0.5px] peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:tracking-[0.4px] will-change-transform transition-transform bg-light-surface dark:bg-dark-surface",
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
  "peer opacity-100 placeholder-shown:opacity-0 focus:opacity-100 text-light-onSurface dark:text-dark-onSurface pt-4 px-4 pb-4 outline-none text-base tracking-[0.5px] bg-transparent placeholder:text-light-onSurfaceVariant dark:placeholder:text-dark-onSurfaceVariant",
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

const OutlinedTextField: FC<Props> = ({
  label,
  leadingIcon,
  trailingIcon,
  supportingText,
  supportingTextCharCount,
  className,
  variant,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-1 w-fit", className)}>
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

export default OutlinedTextField
