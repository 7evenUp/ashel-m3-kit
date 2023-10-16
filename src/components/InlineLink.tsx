import { AnchorHTMLAttributes, FC } from "react"

import { cn } from "@/lib/cn"

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const InlineLink: FC<Props> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        className,
        "text-primary underline underline-offset-4 hover:text-inversePrimary"
      )}
    >
      {children}
    </a>
  )
}

export default InlineLink
