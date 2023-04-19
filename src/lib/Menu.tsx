"use client"

import React, { ReactNode } from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import { cn } from "@/utils/classNames"
import Label from "@/components/ui/text/Label"

const MenuRoot = DropdownMenu.Root

const MenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
  <DropdownMenu.Trigger
    className={cn(className)}
    {...props}
    ref={forwardedRef}
    asChild
  >
    {children}
  </DropdownMenu.Trigger>
))
MenuTrigger.displayName = "MenuTrigger"

const MenuPortal = DropdownMenu.Portal

const MenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Content>
>(({ className, children, ...props }, forwardedRef) => (
  <DropdownMenu.Content
    className={cn(
      "flex flex-col rounded bg-light-surfaceContainer dark:bg-dark-surfaceContainer shadow-elevation2 py-2 w-[280px]",
      className
    )}
    {...props}
    ref={forwardedRef}
    align="start"
  >
    {children}
  </DropdownMenu.Content>
))
MenuContent.displayName = "MenuContent"

type MenuItemElement = React.ElementRef<typeof DropdownMenu.Item>
type DropdownMenuProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenu.Item
>
interface MenuItemProps extends DropdownMenuProps {
  leading?: ReactNode
  trailing?: ReactNode | string
}

const MenuItem = React.forwardRef<MenuItemElement, MenuItemProps>(
  ({ className, children, leading, trailing, ...props }, forwardedRef) => (
    <DropdownMenu.Item
      className={cn(
        "text-light-onSurface dark:text-dark-onSurface h-12 flex items-center gap-3 px-3 aria-disabled:text-opacity-[0.38] dark:aria-disabled:text-opacity-[0.38] select-none outline-none hover:bg-light-onSurface dark:hover:bg-dark-onSurface bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-[0.08] active:bg-opacity-[0.12] dark:hover:bg-opacity-[0.08] dark:active:bg-opacity-[0.12] aria-disabled:bg-opacity-0 dark:aria-disabled:bg-opacity-0 data-[highlighted]:bg-light-onSurface dark:data-[highlighted]:bg-dark-onSurface data-[highlighted]:bg-opacity-[0.12] dark:data-[highlighted]:bg-opacity-[0.12]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {leading && (
        <span className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant">
          {leading}
        </span>
      )}
      <Label size="large">{children}</Label>
      {typeof trailing === "string" ? (
        <Label
          size="large"
          className="ml-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
        >
          {trailing}
        </Label>
      ) : (
        <span className="ml-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant">
          {trailing}
        </span>
      )}
    </DropdownMenu.Item>
  )
)
MenuItem.displayName = "MenuItem"

const MenuSeparator = () => (
  <DropdownMenu.Separator className="w-full my-2 h-[1px] bg-light-outlineVariant dark:bg-dark-outlineVariant" />
)

export {
  MenuRoot,
  MenuTrigger,
  MenuPortal,
  MenuContent,
  MenuItem,
  MenuSeparator,
}

// export default () => (
//   <DropdownMenu.Root>
//     <DropdownMenu.Trigger />

//     <DropdownMenu.Portal>
//       <DropdownMenu.Content>
//         <DropdownMenu.Label />
//         <DropdownMenu.Item />

//         <DropdownMenu.Group>
//           <DropdownMenu.Item />
//         </DropdownMenu.Group>

//         <DropdownMenu.Sub>
//           <DropdownMenu.SubTrigger />
//           <DropdownMenu.Portal>
//             <DropdownMenu.SubContent />
//           </DropdownMenu.Portal>
//         </DropdownMenu.Sub>

//         <DropdownMenu.Separator />
//         <DropdownMenu.Arrow />
//       </DropdownMenu.Content>
//     </DropdownMenu.Portal>
//   </DropdownMenu.Root>
// )
