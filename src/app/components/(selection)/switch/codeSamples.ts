export const sourceCode = `import { ReactNode } from "react"

import { cn } from "@/utils/classNames"

const Switch = ({
  selected,
  onChange,
  icon,
  unselectedIcon,
}: {
  selected: boolean
  onChange: () => void
  icon?: ReactNode
  unselectedIcon?: ReactNode
}) => {
  return (
    <label
      className="group cursor-pointer relative flex h-[32px] w-[52px]"
      htmlFor={"isLeverage"}
    >
      <input
        className="appearance-none peer"
        id="isLeverage"
        type={"checkbox"}
        checked={selected}
        onChange={onChange}
      />

      {/* Track */}
      <div className="h-[32px] w-[52px] absolute border-2 rounded-full transition-all bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest peer-checked:bg-light-primary dark:peer-checked:bg-dark-primary border-light-outline dark:border-dark-outline peer-checked:border-light-primary dark:peer-checked:border-dark-primary" />

      {/* Thumb */}
      <div
        className={cn(
          "absolute rounded-full transition-all flex items-center justify-center peer-checked:h-6 peer-checked:w-6 group-active:h-[28px] group-active:w-[28px] group-active:translate-y-[2px] group-active:translate-x-[2px] group-active:peer-checked:h-[28px] group-active:peer-checked:w-[28px] group-active:peer-checked:translate-y-[2px] group-active:peer-checked:translate-x-[22px] peer-checked:translate-y-1 peer-checked:translate-x-6 bg-light-outline dark:bg-dark-outline peer-checked:bg-light-onPrimary dark:peer-checked:bg-dark-onPrimary group-hover:bg-light-onSurfaceVariant dark:group-hover:bg-dark-onSurfaceVariant group-hover:peer-checked:bg-light-primaryContainer dark:group-hover:peer-checked:bg-dark-primaryContainer",
          unselectedIcon
            ? "h-6 w-6 translate-y-1 translate-x-[4px]"
            : "h-4 w-4 translate-y-2 translate-x-[6px]"
        )}
      >
        {unselectedIcon ? (
          selected ? (
            <span className="text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer opacity-100">
              {icon}
            </span>
          ) : (
            <span className="text-light-surfaceVariant dark:text-dark-surfaceVariant">
              {unselectedIcon}
            </span>
          )
        ) : (
          icon && (
            <span
              className={cn(
                "text-light-outline dark:text-dark-outline opacity-0 transition-opacity",
                selected &&
                  "text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer opacity-100"
              )}
            >
              {icon}
            </span>
          )
        )}
      </div>
    </label>
  )
}

export default Switch`

export const usageCode = `import { Minus, Plus } from "iconoir-react"
...
<Label size="large" className="mt-3 mb-2">
  Без иконок
</Label>
<Switch
  selected={isSelected}
  onChange={() => setIsSelected(!isSelected)}
/>

<Label size="large" className="mt-3 mb-2">
  С иконкой в состоянии selected
</Label>
<Switch
  selected={isSelected}
  onChange={() => setIsSelected(!isSelected)}
  icon={<Plus />}
/>

<Label size="large" className="mt-3 mb-2">
  С иконками в обоих состояниях
</Label>
<Switch
  selected={isSelected}
  onChange={() => setIsSelected(!isSelected)}
  icon={<Plus />}
  unselectedIcon={<Minus />}
/>`