import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/classNames"

const labelVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-sm tracking-[0.1px] font-medium",
      medium: "text-xs tracking-[0.5px] font-medium",
      small: "text-[11px] leading-4 tracking-[0.5px] font-medium",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface LabelProps
  extends VariantProps<typeof labelVariants>,
    React.HTMLAttributes<HTMLSpanElement> {}

const Label = React.forwardRef<HTMLSpanElement, LabelProps>(
  ({ children, size, className, ...props }, forwardedRef) => {
    return (
      <span
        className={cn(labelVariants({ size }), className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </span>
    )
  }
)
Label.displayName = "Label"

export default Label
