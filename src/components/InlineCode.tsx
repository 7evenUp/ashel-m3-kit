import { ReactNode } from "react"

import Label from "./typography/Label"

const InlineCode = ({ children }: { children: ReactNode }) => {
  return (
    <Label
      size="large"
      className="px-1 py-[2px] rounded-sm bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
    >
      {children}
    </Label>
  )
}

export default InlineCode
