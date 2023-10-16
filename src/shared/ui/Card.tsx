import { FC, HTMLAttributes } from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/cn"

const cardVariants = cva("rounded-xl px-4 py-3", {
  variants: {
    appearance: {
      elevated: "bg-surfaceContainerLow shadow-elevation1",
      filled:
        "bg-surfaceContainerHighest shadow-elevation1 text-onSurfaceVariant",
      outlined: "border border-outline",
    },
  },
})

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    Required<Pick<VariantProps<typeof cardVariants>, "appearance">> {}

const Card: FC<CardProps> = ({ className, children, appearance, ...props }) => {
  return (
    <div className={cn(cardVariants({ appearance }), className)} {...props}>
      {children}
    </div>
  )
}

export default Card
