import { ReactNode } from "react"

import Headline from "../shared/typography/Headline"

const Heading = ({ children }: { children: ReactNode }) => {
  return <Headline className="mt-4 mb-2">{children}</Headline>
}

export default Heading
