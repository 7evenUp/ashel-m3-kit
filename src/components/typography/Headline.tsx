import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/classNames"

const headlineVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-[32px] leading-10",
      medium: "text-[28px] leading-9",
      small: "text-2xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface HeadlineProps
  extends VariantProps<typeof headlineVariants>,
    React.HTMLAttributes<HTMLHeadingElement> {}

const Headline = React.forwardRef<HTMLHeadingElement, HeadlineProps>(
  ({ children, size, className, ...props }, forwardedRef) => {
    return (
      <h2
        className={cn(headlineVariants({ size }), className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </h2>
    )
  }
)

export default Headline
