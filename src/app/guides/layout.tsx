import { ReactNode } from "react"

import Footer from "@/components/Footer"
import NavLink from "@/components/NavLink"

export const metadata = {
  title: "Ashel UI Kit | Guides",
  description: "Руководства по грамотному использованию Ashel UI Kit",
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="w-[180px] fixed left-[100px] h-screen top-0 p-3 border-r bg-light-surface dark:bg-dark-surface border-light-outlineVariant dark:border-dark-outlineVariant text-light-onSurface dark:text-dark-onSurface flex flex-col gap-[1px]">
        <NavLink href={"/guides"} label="Overview" />
        <NavLink href={"/guides/vite"} label="Vite" />
        <NavLink href={"/guides/forms"} label="Forms" />
      </div>

      <div className="ml-[180px] p-6">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
