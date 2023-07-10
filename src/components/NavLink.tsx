"use client"

import { FC } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import Title from "../shared/typography/Title"
import UIStateLayer from "../shared/ui/UIStateLayer"

import { cn } from "@/lib/cn"

interface Props {
  href: string
  label: string
}

const NavLink: FC<Props> = ({ href, label }) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link
      href={href}
      className={cn(
        "min-h-[40px] group w-full rounded-full outline-offset-0",
        isActive
          ? "bg-light-secondaryContainer dark:bg-dark-secondaryContainer text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer"
          : "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
      )}
    >
      <UIStateLayer
        className={cn(
          "px-4 rounded-full flex items-center",
          isActive
            ? "bg-light-onSurface dark:bg-dark-onSurface"
            : "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant"
        )}
      >
        <Title>{label}</Title>
      </UIStateLayer>
    </Link>
  )
}

export default NavLink
