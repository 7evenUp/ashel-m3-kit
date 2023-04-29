export const snackbarSource = `import React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { Plus } from "iconoir-react"

import Body from "@/components/typography/Body"

import Button from "../Button"

import { cn } from "@/utils/classNames"

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
        "flex items-center justify-between pl-4 pr-2 shadow-elevation3 rounded bg-light-inverseSurface dark:bg-dark-inverseSurface text-light-inverseOnSurface dark:text-dark-inverseOnSurface min-h-[48px]",
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
    <Button
      appearance="text"
      className="text-light-inversePrimary dark:text-dark-inversePrimary"
    >
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
    className={cn(
      "text-light-inverseOnSurface dark:text-dark-inverseOnSurface py-3",
      className
    )}
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
}`

export const snackbarsSource = `"use client"

import {
  Snackbar,
  SnackbarAction,
  SnackbarClose,
  SupportingText,
  SnackbarProvider,
  SnackbarViewport,
} from "./Snackbar"
import { useSnackbar, SNACKBAR_REMOVE_DELAY } from "./useSnackbar"

import { cn } from "@/utils/classNames"

const Snackbars = () => {
  const { snackbars } = useSnackbar()

  return (
    <SnackbarProvider duration={SNACKBAR_REMOVE_DELAY}>
      {snackbars.map(({ id, supportingText, action, withClose, ...props }) => (
        <Snackbar
          key={id}
          className={cn("px-4", action && "pr-2", withClose && "pr-0")}
          {...props}
        >
          <SupportingText>{supportingText}</SupportingText>
          {action && <SnackbarAction altText="Close">{action}</SnackbarAction>}
          {withClose && <SnackbarClose className="px-3" />}
        </Snackbar>
      ))}
      <SnackbarViewport />
    </SnackbarProvider>
  )
}

export default Snackbars`

export const useSnackbarSource = `import * as React from "react"

import { SnackbarProps } from "./Snackbar"

const SNACKBAR_LIMIT = 1
export const SNACKBAR_REMOVE_DELAY = 3000

type useSnackbarProps = SnackbarProps & {
  id: string
  supportingText?: React.ReactNode
  action?: string
  withClose?: boolean
}

const actionTypes = {
  ADD_SNACKBAR: "ADD_SNACKBAR",
  UPDATE_SNACKBAR: "UPDATE_SNACKBAR",
  DISMISS_SNACKBAR: "DISMISS_SNACKBAR",
  REMOVE_SNACKBAR: "REMOVE_SNACKBAR",
} as const

let count = 0

const genId = () => {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_SNACKBAR"]
      snackbar: useSnackbarProps
    }
  | {
      type: ActionType["UPDATE_SNACKBAR"]
      snackbar: Partial<useSnackbarProps>
    }
  | {
      type: ActionType["DISMISS_SNACKBAR"]
      snackbarId?: useSnackbarProps["id"]
    }
  | {
      type: ActionType["REMOVE_SNACKBAR"]
      snackbarId?: useSnackbarProps["id"]
    }

interface State {
  snackbars: useSnackbarProps[]
}

const snackbarTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (snackbarId: string) => {
  if (snackbarTimeouts.has(snackbarId)) {
    return
  }

  const timeout = setTimeout(() => {
    snackbarTimeouts.delete(snackbarId)
    dispatch({
      type: "REMOVE_SNACKBAR",
      snackbarId: snackbarId,
    })
  }, SNACKBAR_REMOVE_DELAY)

  snackbarTimeouts.set(snackbarId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_SNACKBAR":
      return {
        ...state,
        snackbars: [action.snackbar, ...state.snackbars].slice(
          0,
          SNACKBAR_LIMIT
        ),
      }

    case "UPDATE_SNACKBAR":
      return {
        ...state,
        snackbars: state.snackbars.map((sb) =>
          sb.id === action.snackbar.id ? { ...sb, ...action.snackbar } : sb
        ),
      }

    case "DISMISS_SNACKBAR": {
      const { snackbarId } = action

      // ! Side effects ! - This could be extracted into a dismissSnackbar() action,
      // but I'll keep it here for simplicity
      if (snackbarId) {
        addToRemoveQueue(snackbarId)
      } else {
        state.snackbars.forEach((snackbar) => {
          addToRemoveQueue(snackbar.id)
        })
      }

      return {
        ...state,
        snackbars: state.snackbars.map((sb) =>
          sb.id === snackbarId || snackbarId === undefined
            ? {
                ...sb,
                open: false,
              }
            : sb
        ),
      }
    }
    case "REMOVE_SNACKBAR":
      if (action.snackbarId === undefined) {
        return {
          ...state,
          snackbars: [],
        }
      }
      return {
        ...state,
        snackbars: state.snackbars.filter((sb) => sb.id !== action.snackbarId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { snackbars: [] }

const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

interface ISnackbar extends Omit<useSnackbarProps, "id"> {}

const addSnackbar = ({ ...props }: ISnackbar) => {
  const id = genId()

  const update = (props: useSnackbarProps) =>
    dispatch({
      type: "UPDATE_SNACKBAR",
      snackbar: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_SNACKBAR", snackbarId: id })

  dispatch({
    type: "ADD_SNACKBAR",
    snackbar: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

const useSnackbar = () => {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    addSnackbar,
    dismiss: (snackbarId?: string) =>
      dispatch({ type: "DISMISS_SNACKBAR", snackbarId }),
  }
}

export { useSnackbar, addSnackbar }`

export const usageProviders = `"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

import Snackbars from "@/lib/Snackbar/Snackbars"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
      <Snackbars />
    </ThemeProvider>
  )
}

export default Providers`

export const usageRoot = `export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex bg-light-background dark:bg-dark-background">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}`

export const usageHook = `import Button from "@/lib/Button"
import { useSnackbar } from "@/lib/Snackbar/useSnackbar"
...
const { addSnackbar } = useSnackbar()
...
<Button
  appearance="tonal"
  onClick={() => {
    addSnackbar({
      supportingText: "Snackbar with close and action buttons",
      action: 'Action',
      withClose: true
    })
  }}
>
  With close and action
</Button>`