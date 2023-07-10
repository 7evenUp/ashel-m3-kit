"use client"

import Button from "@/shared/ui/Button"
import { useSnackbar } from "@/shared/ui/Snackbar/useSnackbar"

const SnackbarExamples = () => {
  const { addSnackbar } = useSnackbar()
  
  return (
    <>
      <Button
        appearance="tonal"
        onClick={() => {
          addSnackbar({
            supportingText:
              "This is default snackbar with only supporting text",
          })
        }}
      >
        Open default
      </Button>
      <Button
        appearance="tonal"
        onClick={() => {
          addSnackbar({
            supportingText: "Snackbar with close button",
            withClose: true,
          })
        }}
      >
        With close
      </Button>
      <Button
        appearance="tonal"
        onClick={() => {
          addSnackbar({
            supportingText: "Snackbar with action button",
            action: "Action",
          })
        }}
      >
        With action
      </Button>
      <Button
        appearance="tonal"
        onClick={() => {
          addSnackbar({
            supportingText: "Snackbar with close and action buttons",
            action: "Action",
            withClose: true,
          })
        }}
      >
        With close and action
      </Button>
    </>
  )
}

export default SnackbarExamples
