import React, { HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import Label from "@/components/typography/Label"

import { cn } from "@/utils/classNames"

const badgeVariants = cva(
  "absolute left-2/3 top-1 select-none flex justify-center items-center text-light-onError dark:text-dark-onError rounded-full bg-light-error dark:bg-dark-error",
  {
    variants: {
      size: {
        small: "w-[6px] h-[6px]",
        large: "min-w-[16px] h-[16px] p-1",
      },
    },
  }
)

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    Required<Pick<VariantProps<typeof badgeVariants>, "size">> {}

const Badge = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, size, ...props }, forwardedRef) => {
    return (
      <div
        className={cn(badgeVariants({ size }), className)}
        {...props}
        ref={forwardedRef}
      >
        {size === "large" && <Label size="small">{children}</Label>}
      </div>
    )
  }
)
Badge.displayName = "Badge"

export default Badge
