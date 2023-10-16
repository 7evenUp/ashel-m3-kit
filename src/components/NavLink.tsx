"use client"

import { FC } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import Title from "@/shared/typography/Title"

import UIStateLayer from "@/shared/ui/UIStateLayer"
import RichTooltip from "@/shared/ui/RichTooltip"

import { cn } from "@/lib/cn"

interface Props {
  href: string
  label: string
  custom?: boolean
}

const NavLink: FC<Props> = ({ href, label, custom }) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link
      href={href}
      className={cn(
        "relative group min-h-[40px] w-full rounded-full outline-offset-0",
        isActive
          ? "bg-secondaryContainer text-onSecondaryContainer"
          : "text-onSurfaceVariant"
      )}
    >
      <UIStateLayer
        className={cn(
          "px-4 rounded-full flex items-center",
          isActive ? "bg-onSurface" : "bg-onSurfaceVariant"
        )}
      >
        <Title>{label}</Title>
      </UIStateLayer>
      {custom && (
        <RichTooltip
          className="z-[99999]"
          subhead="Кастомный компонент"
          supportingText="Компонент, которого нет в официальной документации, но который широко распространён в вебе. Исполнен с учётом стайл гайдов Material Design V3"
        >
          <span className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-tertiary" />
        </RichTooltip>
      )}
    </Link>
  )
}

export default NavLink
