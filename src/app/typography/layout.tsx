import { ReactNode } from "react"

import Footer from "@/components/Footer"
import NavLink from "@/components/NavLink"

export const metadata = {
  title: "Ashel M3 Kit | Typography",
  description:
    "Базовые принципы и реализация компонентов для Material Design V3 используя react.js",
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="w-[180px] fixed left-[100px] h-screen top-0 p-3 border-r bg-surface border-outlineVariant text-onSurface flex flex-col gap-[1px]">
        <NavLink href={"/typography"} label="Overview" />
        <NavLink href={"/typography/display"} label="Display" />
        <NavLink href={"/typography/headline"} label="Headline" />
        <NavLink href={"/typography/title"} label="Title" />
        <NavLink href={"/typography/body"} label="Body" />
        <NavLink href={"/typography/label"} label="Label" />
      </div>

      <div className="ml-[180px] p-6">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
