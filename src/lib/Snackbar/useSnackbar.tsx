import * as React from "react"

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

export { useSnackbar, addSnackbar }
