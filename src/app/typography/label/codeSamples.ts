export const labelSrc = `import { FC, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/classNames"

const labelVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-sm tracking-[0.1px] font-medium",
      medium: "text-xs tracking-[0.5px] font-medium",
      small: "text-[11px] leading-4 tracking-[0.5px] font-medium",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface Props
  extends VariantProps<typeof labelVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Label: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <span className={cn(labelVariants({ size }), className)} {...props}>
      {children}
    </span>
  )
}

export default Label`

export const usage = `import Label from "@/components/typography/Label"

{/* Большой */}
<Label size="large">Label large</Label>
{/* Средний */}
<Label size="medium">Label medium</Label>
{/* или без указания size (medium по умолчанию) */}
<Label>Label medium</Label>
{/* Маленький */}
<Label size="small">Label small</Label>`

export const custom = `<Label className="text-red-400 dark:text-red-400">
  (R)ed
</Label>
<Label className="text-green-400 dark:text-green-400">
  (G)reen
</Label>
<Label className="text-blue-400 dark:text-blue-400">
  (B)lue
</Label>`