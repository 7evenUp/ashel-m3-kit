import { cn } from "@/utils/classNames"
import Link from "next/link"
import { ReactNode } from "react"

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
