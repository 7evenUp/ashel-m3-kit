import { ReactNode } from "react"

import Title from "../shared/typography/Title"

const Subheading = ({ children }: { children: ReactNode }) => {
  return (
    <Title size="large" className="mt-3 mb-2">
      {children}
    </Title>
  )
}

export default Subheading
