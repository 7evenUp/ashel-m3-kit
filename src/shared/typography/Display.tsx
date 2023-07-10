import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/cn"

const displayVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-[57px] leading-[64px] tracking-[-0.25px]",
      medium: "text-[45px] leading-[52px]",
      small: "text-4xl leading-[44px]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface DisplayProps
  extends VariantProps<typeof displayVariants>,
    React.HTMLAttributes<HTMLHeadingElement> {}

const Display = React.forwardRef<HTMLHeadingElement, DisplayProps>(
  ({ children, size, className, ...props }, forwardedRef) => {
    return (
      <h1
        className={cn(displayVariants({ size }), className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </h1>
    )
  }
)
Display.displayName = "Display"

export default Display
