import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"
import { FC, HTMLAttributes } from "react"
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

interface Props
  extends VariantProps<typeof titleVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Title: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <p className={cn(titleVariants({ size }), className)} {...props}>
      {children}
    </p>
  )
}

export default Title
