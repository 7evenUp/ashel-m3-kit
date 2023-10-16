import { ReactNode } from "react"

import Footer from "@/components/Footer"
import NavLink from "@/components/NavLink"

export const metadata = {
  title: "Ashel M3 Kit | Colors",
  description: "Основные принципы цвета в Material Design V3",
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="w-[180px] fixed left-[100px] h-screen top-0 p-3 border-r bg-surface border-outlineVariant text-onSurface flex flex-col gap-[1px]">
        <NavLink href={"/colors"} label="Overview" />
        <NavLink href={"/colors/color-roles"} label="Color roles" />
        <NavLink href={"/colors/surfaces"} label="Surfaces" />
        <NavLink href={"/colors/themes"} label="Themes" />
      </div>

      <div className="ml-[180px] p-6">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
