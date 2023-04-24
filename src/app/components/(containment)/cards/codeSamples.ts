export const sourceCode = `import { FC, HTMLAttributes } from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/utils/classNames"

const cardVariants = cva("rounded-xl px-4 py-3", {
  variants: {
    appearance: {
      elevated:
        "bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow shadow-elevation1",
      filled:
        "bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest shadow-elevation1 text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant",
      outlined: "border border-light-outline dark:border-dark-outline",
    },
  },
})
interface Props
  extends HTMLAttributes<HTMLDivElement>,
    Required<Pick<VariantProps<typeof cardVariants>, "appearance">> {}

const Card: FC<Props> = ({ className, children, appearance, ...props }) => {
  return (
    <div className={cn(cardVariants({ appearance }), className)} {...props}>
      {children}
    </div>
  )
}

export default Card`

export const usageCode = `<Card appearance={"elevated"}>
  {/* Контент находится здесь */}
</Card>

<Card appearance={"filled"}>
  {/* Контент находится здесь */}
</Card>

<Card appearance={"outlined"}>
  {/* Контент находится здесь */}
</Card>`

export const customCode = `<Card
  appearance="outlined"
  className="w-fit my-4 bg-yellow-200 bg-opacity-20 border-yellow-400 dark:bg-yellow-200 dark:bg-opacity-80 dark:border-yellow-100 dark:text-dark-inverseOnSurface"
>
  <Body>Данный компонент имеет фон и обводку жёлтого цвета</Body>
</Card>`