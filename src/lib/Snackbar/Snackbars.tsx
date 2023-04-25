"use client"

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

export default Snackbars
