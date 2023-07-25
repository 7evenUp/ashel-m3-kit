import { ReactNode } from "react"

import Title from "@/shared/typography/Title"

import Footer from "@/components/Footer"
import NavLink from "@/components/NavLink"

export const metadata = {
  title: "M3 Kit | Components",
  description: "Реализация компонентов от Material Design V3 для React.js",
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="nav-with-scroll w-[210px] fixed left-[100px] h-screen top-0 p-3 flex flex-col gap-[1px] overflow-y-auto pb-80">
        <NavLink href={"/components"} label="Overview" />
        <NavLink href={"/components/ui-state-layer"} label="UIStateLayer" />

        <Title size="large" className="mt-4 text-xl">
          Actions
        </Title>
        <NavLink href={"/components/common-buttons"} label="Common buttons" />
        <NavLink href={"/components/icon-buttons"} label="Icon buttons" />
        <NavLink
          href={"/components/segmented-buttons"}
          label="Segmented buttons"
        />

        <Title size="large" className="mt-4 text-xl">
          Communication
        </Title>
        <NavLink href={"/components/badges"} label="Badges" />
        <NavLink href={"/components/snackbar"} label="Snackbar" />

        <Title size="large" className="mt-4 text-xl">
          Containment
        </Title>
        <NavLink href={"/components/cards"} label="Cards" />
        <NavLink href={"/components/dialogs"} label="Dialog" />
        <NavLink href={"/components/tooltips"} label="Tooltip" />

        <Title size="large" className="mt-4 text-xl">
          Navigation
        </Title>
        <NavLink href={"/components/navigation-bar"} label="Navigation bar" />
        <NavLink
          href={"/components/navigation-drawer"}
          label="Navigation drawer"
        />
        <NavLink href={"/components/tabs"} label="Tabs" />

        <Title size="large" className="mt-4 text-xl">
          Selection
        </Title>
        <NavLink href={"/components/checkbox"} label="Checkbox" />
        <NavLink href={"/components/chips"} label="Chips" />
        <NavLink href={"/components/menus"} label="Menus" />
        <NavLink href={"/components/radio-button"} label="Radio button" />
        <NavLink href={"/components/sliders"} label="Sliders" />
        <NavLink href={"/components/switch"} label="Switch" />

        <Title size="large" className="mt-4 text-xl">
          Text Inputs
        </Title>
        <NavLink
          href={"/components/filled-text-field"}
          label="Filled text field"
        />
        <NavLink
          href={"/components/outlined-text-field"}
          label="Outlined text field"
        />
      </div>

      <div className="ml-[210px] p-6">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
