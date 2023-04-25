"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

import Snackbars from "@/lib/Snackbar/Snackbars"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
      <Snackbars />
    </ThemeProvider>
  )
}

export default Providers
