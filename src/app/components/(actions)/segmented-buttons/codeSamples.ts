export const sourceCode = `import Label from "@/components/ui/text/Label"
import UIStateLayer from "@/components/ui/UIStateLayer"
import { cn } from "@/utils/classNames"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { forwardRef } from "react"

const SegmentedRoot = forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Root>
>(({ className, ...props }, ref) => (
  <ToggleGroup.Root
    className={cn(
      "flex border border-light-outline dark:border-dark-outline rounded-full divide-x divide-light-outline dark:divide-dark-outline",
      className
    )}
    {...props}
    ref={ref}
  />
))
SegmentedRoot.displayName = ToggleGroup.Root.displayName

const SegmentedButton = forwardRef<
  React.ElementRef<typeof ToggleGroup.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Item>
>(({ className, type, children, ...props }, ref) => (
  <ToggleGroup.Item
    className={cn("group", className)}
    {...props}
    ref={ref}
    asChild
  >
    <button
      className="flex-1 text-light-onSurface dark:text-dark-onSurface data-[state=on]:text-light-onSecondaryContainer dark:data-[state=on]:text-dark-onSecondaryContainer data-[state=on]:bg-light-secondaryContainer dark:data-[state=on]:bg-dark-secondaryContainer first:rounded-l-full last:rounded-r-full"
      type="button"
    >
      <UIStateLayer className="py-2 px-3 text-center bg-light-onSurface dark:bg-dark-onSurface group-data-[state=on]:bg-light-onSecondaryContainer dark:group-data-[state=on]:bg-dark-onSecondaryContainer group-first:rounded-l-full group-last:rounded-r-full group-data-[state=on]:bg-opacity-0 dark:group-data-[state=on]:bg-opacity-0 group-data-[state=on]:group-hover:bg-opacity-[0.08] group-data-[state=on]:group-active:bg-opacity-[0.12] dark:group-data-[state=on]:group-hover:bg-opacity-[0.08] dark:group-data-[state=on]:group-active:bg-opacity-[0.12]">
        <Label size={"large"}>{children}</Label>
      </UIStateLayer>
    </button>
  </ToggleGroup.Item>
))
SegmentedButton.displayName = ToggleGroup.Item.displayName

export { SegmentedButton, SegmentedRoot }`

export const usageCodeSingle = `import { SegmentedButton, SegmentedRoot } from "@/components/ui/SegmentedButton
import { useState } from "react""
...
const [state, setState] = useState("usd")
...
<SegmentedRoot
  className="w-[500px]"
  type="single"
  value={state}
  onValueChange={(value) => value && setState(value)}
>
  <SegmentedButton
    name="currency"
    value="try"
  >
    Лира
  </SegmentedButton>
  <SegmentedButton
    name="currency"
    value="usd"
  >
    Доллары
  </SegmentedButton>
  <SegmentedButton
    name="currency"
    value="cny"
  >
    Юань
  </SegmentedButton>
</SegmentedRoot>`

export const usageCodeMultiple = `import { SegmentedButton, SegmentedRoot } from "@/components/ui/SegmentedButton
...
<SegmentedRoot
  className="w-[500px]"
  type="multiple"
  defaultValue={["english", "german"]}
>
  <SegmentedButton name="language" value="english">
    Английский
  </SegmentedButton>
  <SegmentedButton name="language" value="spanish">
    Испанский
  </SegmentedButton>
  <SegmentedButton name="language" value="german">
    Немецкий
  </SegmentedButton>
  <SegmentedButton name="language" value="french">
    Французский
  </SegmentedButton>
</SegmentedRoot>`