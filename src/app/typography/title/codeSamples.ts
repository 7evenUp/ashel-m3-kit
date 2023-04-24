export const titleSrc = `import { FC, HTMLAttributes } from "react"
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

export default Title`

export const usage = `import Title from "@/components/typography/Title"

{/* Большой */}
<Title size="large">Title large</Title>
{/* Средний */}
<Title size="medium">Title medium</Title>
{/* или без указания size (medium по умолчанию) */}
<Title>Title medium</Title>
{/* Маленький */}
<Title size="small">Title small</Title>`

export const custom = `<Title size="large" className="leading-5 w-[200px]">
  Текст с очень низким line-height
</Title>
<Title size="large" className="w-[200px] mt-2">
  Текст со стандартным line-height
</Title>`