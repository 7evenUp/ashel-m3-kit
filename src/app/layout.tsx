import { Analytics } from "@vercel/analytics/react"

import { Roboto } from "next/font/google"

import NavigationRail from "@/components/NavigationRail"
import Providers from "@/components/Providers"

import "@/styles/globals.css"

export const metadata = {
  title: "Ashel | UI kit",
  description: "Ashel's implementation of material design V3",
}

const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={"bg-white antialiased " + roboto.className}>
      <body className="min-h-screen w-full flex bg-light-background dark:bg-dark-background">
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
