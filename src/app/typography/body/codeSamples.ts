export const bodySrc = `import { FC, HTMLAttributes } from "react"
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

interface Props
  extends VariantProps<typeof bodyVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Body: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <p className={cn(bodyVariants({ size }), className)} {...props}>
      {children}
    </p>
  )
}

export default Body`

export const usage = `import Body from "@/components/typography/Body"

{/* Большой */}
<Body size="large">Body large</Body>
{/* Средний */}
<Body size="medium">Body medium</Body>
{/* или без указания size (medium по умолчанию) */}
<Body>Body medium</Body>
{/* Маленький */}
<Body size="small">Body small</Body>`

export const custom = `<Body size="large" className="text-lg w-[150px]">
  Короткий текст размером 18px
</Body>
<Body size="large">
  Стандартный текст
</Body>`