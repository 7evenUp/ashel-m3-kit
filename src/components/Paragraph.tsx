import { ReactNode } from "react"

import Body from "./typography/Body"

const Paragraph = ({ children }: { children: ReactNode }) => {
  return (
    <Body size={"large"} className="max-w-prose">
      {children}
    </Body>
  )
}

export default Paragraph
