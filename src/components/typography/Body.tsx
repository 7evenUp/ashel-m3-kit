import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/classNames"

const bodyVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-base tracking-[0.5px]",
      medium: "text-sm tracking-[0.25px]",
      small: "text-xs tracking-[0.4px]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface BodyProps
  extends VariantProps<typeof bodyVariants>,
    React.HTMLAttributes<HTMLParagraphElement> {}

const Body = React.forwardRef<HTMLParagraphElement, BodyProps>(
  ({ children, size, className, ...props }, forwardedRef) => {
    return (
      <p
        className={cn(bodyVariants({ size }), className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </p>
    )
  }
)
Body.displayName = "Body"

export default Body
