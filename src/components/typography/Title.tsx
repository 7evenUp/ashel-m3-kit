import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/classNames"

const titleVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-[22px] leading-7",
      medium: "text-base tracking-[0.15px] font-medium",
      small: "text-sm tracking-[0.1px] font-medium",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface TitleProps
  extends VariantProps<typeof titleVariants>,
    React.HTMLAttributes<HTMLParagraphElement> {}

const Title = React.forwardRef<HTMLParagraphElement, TitleProps>(
  ({ children, size, className, ...props }, forwardedRef) => {
    return (
      <p
        className={cn(titleVariants({ size }), className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </p>
    )
  }
)

export default Title
