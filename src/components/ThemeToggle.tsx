"use client"

import { FC, HTMLAttributes, useEffect, useState } from "react"
import { SunLight, HalfMoon } from "iconoir-react"
import { useTheme } from "next-themes"

import { cn } from "@/utils/classNames"

import UIStateLayer from "./ui/UIStateLayer"

const ThemeToggle: FC<HTMLAttributes<HTMLButtonElement>> = ({ className }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("light")
    }
  }

  return (
    <button
      className={cn(
        "group w-12 h-12 rounded-full border border-light-outline dark:border-dark-outline bg-transparent",
        className
      )}
      onClick={toggleTheme}
    >
      <UIStateLayer className="rounded-full flex items-center justify-center bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant">
        {theme === "dark" ? (
          <SunLight className="group-hover:fill-dark-onSurfaceVariant" />
        ) : (
          <HalfMoon className="group-hover:fill-light-onSurfaceVariant" />
        )}
      </UIStateLayer>
    </button>
  )
}

export default ThemeToggle
