import { ReactNode } from "react"
import Link from "next/link"

import { cn } from "@/utils/classNames"

const InternalLink = ({
  children,
  href,
  className,
}: {
  children: ReactNode
  href: string
  className?: string
}) => {
  return (
    <Link
      href={href}
      className={cn(
        className,
        "text-light-primary dark:text-dark-primary underline underline-offset-4 hover:text-light-inversePrimary hover:dark:text-dark-inversePrimary"
      )}
    >
      {children}
    </Link>
  )
}

export default InternalLink
