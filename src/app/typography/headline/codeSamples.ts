export const headlineSrc = `import { FC, HTMLAttributes } from "react"
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

interface Props
  extends VariantProps<typeof headlineVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Headline: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <h2 className={cn(headlineVariants({ size }), className)} {...props}>
      {children}
    </h2>
  )
}

export default Headline`

export const usage = `import Headline from "@/components/typography/Headline""

{/* Большой */}
<Headline size="large">Headline large</Headline>
{/* Средний */}
<Headline size="medium">Headline medium</Headline>
{/* или без указания size (medium по умолчанию) */}
<Headline>Headline medium</Headline>
{/* Маленький */}
<Headline size="small">Headline small</Headline>`

export const custom = `<Headline
  className="text-rose-400 dark:text-rose-400 tracking-widest"
>
  Розовый текст с увеличенным letter-spacing
</Headline>
<Headline>Просто обычный текст</Headline>`