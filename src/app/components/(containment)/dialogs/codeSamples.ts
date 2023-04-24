export const sourceCode = `"use client"

import { ReactNode } from "react"
import * as RadixDialog from "@radix-ui/react-dialog"

import Headline from "@/components/typography/Headline"
import Body from "@/components/typography/Body"

import Button from "./Button"

const Dialog = RadixDialog.Root

const DialogTrigger = RadixDialog.Trigger

const DialogTitle = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Title
    className="text-light-onSurface dark:text-dark-onSurface mb-4"
    asChild
  >
    <Headline size={"small"}>{children}</Headline>
  </RadixDialog.Title>
)

const DialogDescription = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Description
    className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
    asChild
  >
    <Body>{children}</Body>
  </RadixDialog.Description>
)

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

const DialogContent = ({ children }: { children: ReactNode }) => {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 bg-light-scrim dark:bg-dark-scrim bg-opacity-20 dark:bg-opacity-20" />
      <RadixDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest min-w-[280px] max-w-[560px] shadow-elevation3 p-6 rounded-[28px]">
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogActionButtonContainer,
  DialogActionButton,
  DialogContent,
}`

export const usageCode = `<Dialog>
  <DialogTrigger asChild>
    <Button appearance={"tonal"}>Открыть Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Dialog Title</DialogTitle>
    <DialogDescription>Dialog Body description.</DialogDescription>
    {/* Your other content goes here */}
    <DialogActionButtonContainer>
      <DialogActionButton>Close</DialogActionButton>
      <DialogActionButton>Save changes</DialogActionButton>
    </DialogActionButtonContainer>
  </DialogContent>
</Dialog>`