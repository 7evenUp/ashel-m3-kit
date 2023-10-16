"use client"

import React, { ReactNode } from "react"
import * as RadixDialog from "@radix-ui/react-dialog"

import Headline from "@/shared/typography/Headline"
import Body from "@/shared/typography/Body"

import Button from "./Button"

const Dialog = RadixDialog.Root

const DialogTrigger = RadixDialog.Trigger

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Title>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Title>
>(({ children, ...props }, forwardedRef) => (
  <RadixDialog.Title
    className="text-onSurface mb-4"
    {...props}
    ref={forwardedRef}
    asChild
  >
    <Headline size={"small"}>{children}</Headline>
  </RadixDialog.Title>
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Description>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Description>
>(({ children, ...props }, forwardedRef) => (
  <RadixDialog.Description
    className="text-onSurfaceVariant"
    {...props}
    ref={forwardedRef}
    asChild
  >
    <Body>{children}</Body>
  </RadixDialog.Description>
))
DialogDescription.displayName = "DialogDescription"

const DialogActionButtonContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center justify-end gap-2 mt-6">{children}</div>
)

const DialogActionButton = ({
  children,
  onClick,
}: {
  children: ReactNode
  onClick?: () => void
}) => (
  <RadixDialog.Close asChild>
    <Button appearance={"text"} onClick={onClick}>
      {children}
    </Button>
  </RadixDialog.Close>
)

const DialogContent = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Content>
>(({ children, ...props }, forwardedRef) => {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 bg-scrim bg-opacity-20 will-change-[opacity] animate-fade-in data-[state=closed]:animate-fade-out" />
      <RadixDialog.Content
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surfaceContainerHighest min-w-[280px] max-w-[560px] shadow-elevation3 p-6 rounded-[28px] will-change-[opacity,transform] animate-dialog-show data-[state=closed]:animate-dialog-hide"
        {...props}
        ref={forwardedRef}
      >
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  )
})
DialogContent.displayName = "DialogContent"

export {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogActionButtonContainer,
  DialogActionButton,
  DialogContent,
}
