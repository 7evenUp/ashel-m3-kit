"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { Cancel } from "iconoir-react"

import Title from "../typography/Title"

import { cn } from "@/lib/cn"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = ({
  className,
  ...props
}: SheetPrimitive.DialogPortalProps) => (
  <SheetPrimitive.Portal className={cn(className)} {...props} />
)
SheetPortal.displayName = SheetPrimitive.Portal.displayName

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, forwardedRef) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-light-scrim/20 dark:bg-dark-scrim/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={forwardedRef}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 flex flex-col py-6 rounded-l-extra-large shadow-elevation1 bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full min-w-[320px] max-w-[400px] data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        right:
          "inset-y-0 right-0 h-full min-w-[320px] max-w-[400px] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, forwardedRef) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={forwardedRef}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex items-center gap-3 text-left px-6 mb-6", className)}
    {...props}
  >
    {children}
    <SheetPrimitive.Close className="ml-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-sm opacity-100 transition-opacity hover:opacity-70">
      <Cancel />
    </SheetPrimitive.Close>
  </div>
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="mt-auto">
    <div className="h-px w-full bg-light-outline dark:bg-dark-outline" />
    <div
      className={cn("flex items-center gap-2 h-[72px] pt-4 px-6", className)}
      {...props}
    />
  </div>
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, children, ...props }, forwardedRef) => (
  <SheetPrimitive.Title
    ref={forwardedRef}
    className={cn(
      "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant",
      className
    )}
    {...props}
    asChild
  >
    <Title size="large">{children}</Title>
  </SheetPrimitive.Title>
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
}
