export const usageProviders = `"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

import Snackbars from "@/shared/ui/Snackbar/Snackbars"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
      <Snackbars />
    </ThemeProvider>
  )
}

export default Providers`

export const usageRoot = `export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex bg-light-background dark:bg-dark-background">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}`

export const usageHook = `import Button from "@/lib/Button"
import { useSnackbar } from "@/lib/Snackbar/useSnackbar"
...
const { addSnackbar } = useSnackbar()
...
<Button
  appearance="tonal"
  onClick={() => {
    addSnackbar({
      supportingText: "Snackbar with close and action buttons",
      action: 'Action',
      withClose: true
    })
  }}
>
  With close and action
</Button>`