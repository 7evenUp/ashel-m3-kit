import { Analytics } from "@vercel/analytics/react"

import { Roboto } from "next/font/google"

import NavigationRail from "@/components/NavigationRail"
import Providers from "@/components/Providers"

import "@/styles/globals.css"

export const metadata = {
  title: "Ashel | M3 kit",
  description:
    "Реализация дизайн системы Material Design 3 версии от Ashel",
}

const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={"bg-white antialiased " + roboto.className}>
      <body className="min-h-screen w-full flex bg-light-surface dark:bg-dark-surface">
        <Providers>
          <NavigationRail />
          <div className="ml-[100px] w-full text-light-onSurface dark:text-dark-onSurface">
            {children}
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
