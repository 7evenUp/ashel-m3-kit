"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import Label from "../shared/typography/Label"
import UIStateLayer from "../shared/ui/UIStateLayer"

import { cn } from "@/lib/cn"

const NavLinkWithIcon = ({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: ReactNode
}) => {
  const segment = useSelectedLayoutSegment()
  const isActive = href.split("/")[1] === segment

  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-1 rounded-md outline-offset-4"
    >
      <div className={cn("rounded-full", isActive && "bg-secondaryContainer")}>
        <UIStateLayer
          className={cn(
            "py-1 px-4 rounded-full",
            isActive ? "bg-onSurface" : "bg-onSurfaceVariant"
          )}
        >
          <span
            className={
              isActive ? "text-onSecondaryContainer" : "text-onSurfaceVariant"
            }
          >
            {icon}
          </span>
        </UIStateLayer>
      </div>
      <Label className={cn(!isActive && "text-onSurfaceVariant")}>
        {label}
      </Label>
    </Link>
  )
}

export default NavLinkWithIcon
