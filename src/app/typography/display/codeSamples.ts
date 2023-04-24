export const displaySrc = `import { FC, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/classNames"

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

interface Props
  extends VariantProps<typeof displayVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Display: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <h1 className={cn(displayVariants({ size }), className)} {...props}>
      {children}
    </h1>
  )
}

export default Display`

export const usage = `import Display from "@/components/typography/Display"

{/* Большой */}
<Display size="large">Display large</Display>
{/* Средний */}
<Display size="medium">Display medium</Display>
{/* или без указания size (medium по умолчанию) */}
<Display>Display medium</Display>
{/* Маленький */}
<Display size="small">Display small</Display>`

export const custom = `<Display
  size="small"
  className="text-green-400 dark:text-green-400 w-[250px]"
>
  Зелёный текст шириной 250 пикселей
</Display>
<Display size="small">Просто обычный текст</Display>`