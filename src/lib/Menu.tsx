"use client"

import React from "react"
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

const MenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Item>
>(({ className, children, onSelect, ...props }, forwardedRef) => (
  <DropdownMenu.Item
    className={cn(
      "text-light-onSurface dark:text-dark-onSurface h-12 flex items-center px-3 aria-disabled:text-opacity-[0.38] dark:aria-disabled:text-opacity-[0.38] select-none outline-none hover:bg-light-onSurface dark:hover:bg-dark-onSurface bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-[0.08] active:bg-opacity-[0.12] dark:hover:bg-opacity-[0.08] dark:active:bg-opacity-[0.12] aria-disabled:bg-opacity-0 dark:aria-disabled:bg-opacity-0 data-[highlighted]:bg-light-onSurface dark:data-[highlighted]:bg-dark-onSurface data-[highlighted]:bg-opacity-[0.12] dark:data-[highlighted]:bg-opacity-[0.12]",
      className
    )}
    {...props}
    onSelect={onSelect}
    ref={forwardedRef}
  >
    <Label size={"large"}>{children}</Label>
  </DropdownMenu.Item>
))
MenuItem.displayName = "MenuItem"

export { MenuRoot, MenuTrigger, MenuPortal, MenuContent, MenuItem }

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
