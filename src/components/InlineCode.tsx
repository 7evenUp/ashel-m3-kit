import { ReactNode } from "react"

import Label from "../shared/typography/Label"

const InlineCode = ({ children }: { children: ReactNode }) => {
  return (
    <Label
      size="large"
      className="px-1 py-[2px] rounded-sm bg-surfaceVariant text-onSurfaceVariant"
    >
      {children}
    </Label>
  )
}

export default InlineCode
