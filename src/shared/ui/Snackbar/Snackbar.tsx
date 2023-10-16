import React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { Plus } from "iconoir-react"

import Body from "@/shared/typography/Body"

import Button from "../Button"

import { cn } from "@/lib/cn"

const SnackbarProvider = ToastPrimitives.Provider

const SnackbarViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, forwardedRef) => (
  <ToastPrimitives.Viewport
    ref={forwardedRef}
    className={cn(
      "fixed bottom-0 right-0 flex flex-col gap-2 p-6 w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none",
      className
    )}
    {...props}
  />
))
SnackbarViewport.displayName = "SnackbarViewport"

const Snackbar = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
>(({ className, ...props }, forwardedRef) => {
  return (
    <ToastPrimitives.Root
      ref={forwardedRef}
      className={cn(
        "flex items-center justify-between pl-4 pr-2 shadow-elevation3 rounded bg-inverseSurface text-inverseOnSurface min-h-[48px]",
        className
      )}
      {...props}
    />
  )
})
Snackbar.displayName = "Snackbar"

const SnackbarAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, children, ...props }, forwardedRef) => (
  <ToastPrimitives.Action
    ref={forwardedRef}
    className={cn(className)}
    {...props}
    asChild
  >
    <Button appearance="text" className="text-inversePrimary">
      {children}
    </Button>
  </ToastPrimitives.Action>
))
SnackbarAction.displayName = "SnackbarAction"

const SnackbarClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, forwardedRef) => (
  <ToastPrimitives.Close
    ref={forwardedRef}
    className={cn("", className)}
    aria-label="Close"
    toast-close=""
    {...props}
  >
    <Plus className="rotate-45" />
  </ToastPrimitives.Close>
))
SnackbarClose.displayName = "SnackbarClose"

const SupportingText = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, children, ...props }, forwardedRef) => (
  <ToastPrimitives.Description
    ref={forwardedRef}
    className={cn("text-inverseOnSurface py-3", className)}
    {...props}
  >
    <Body>{children}</Body>
  </ToastPrimitives.Description>
))
SupportingText.displayName = "SupportingText"

type SnackbarProps = React.ComponentPropsWithoutRef<typeof Snackbar>

export {
  type SnackbarProps,
  SnackbarProvider,
  SnackbarViewport,
  Snackbar,
  SupportingText,
  SnackbarClose,
  SnackbarAction,
}
