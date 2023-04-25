"use client"

import {
  Snackbar,
  SnackbarAction,
  SnackbarClose,
  SupportingText,
  SnackbarProvider,
  SnackbarViewport,
} from "./Snackbar"
import { useSnackbar } from "./useSnackbar"

const Snackbars = () => {
  const { snackbars } = useSnackbar()

  return (
    <SnackbarProvider>
      {snackbars.map(({ id, supportingText, action, withClose, ...props }) => (
        <Snackbar key={id} {...props}>
          <SupportingText>{supportingText}</SupportingText>
          {action && <SnackbarAction altText="Close">{action}</SnackbarAction>}
          {withClose && <SnackbarClose />}
        </Snackbar>
      ))}
      <SnackbarViewport />
    </SnackbarProvider>
  )
}

export default Snackbars
