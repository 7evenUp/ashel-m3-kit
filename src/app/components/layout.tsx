import NavLink from "@/components/NavLink";
import Title from "@/components/ui/text/Title";
import { ReactNode } from "react";

export const metadata = {
  title: "Ashel UI Kit | Components",
  description: "Implementation of Material Design V3 components",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="nav-with-scroll w-[210px] fixed left-[100px] h-screen top-0 p-3 flex flex-col gap-[1px] overflow-y-auto pb-80">
        <NavLink href={"/components"} label="Overview" />

        <Title size="large" className="mt-4 text-xl">Actions</Title>
        <NavLink href={"/components/common-buttons"} label="Common buttons" />
        <NavLink href={"/components/icon-buttons"} label="Icon buttons" />
        <NavLink href={"/components/segmented-buttons"} label="Segmented buttons" />

        <Title size="large" className="mt-4 text-xl">Communication</Title>
        <NavLink href={"/components/badges"} label="Badges" />
        <NavLink href={"/components/snackbar"} label="Snackbar" />

        <Title size="large" className="mt-4 text-xl">Containment</Title>
        <NavLink href={"/components/cards"} label="Cards" />
        <NavLink href={"/components/dialogs"} label="Dialog" />

        <Title size="large" className="mt-4 text-xl">Navigation</Title>
        <NavLink href={"/components/navigation-bar"} label="Navigation bar" />
        <NavLink href={"/components/navigation-drawer"} label="Navigation drawer" />
        <NavLink href={"/components/tabs"} label="Tabs" />

        <Title size="large" className="mt-4 text-xl">Selection</Title>
        <NavLink href={"/components/checkbox"} label="Checkbox" />
        <NavLink href={"/components/radio-button"} label="Radio button" />
        <NavLink href={"/components/chips"} label="Chips" />
        <NavLink href={"/components/switch"} label="Switch" />
        <NavLink href={"/components/menus"} label="Menus" />

        <Title size="large" className="mt-4 text-xl">Text Inputs</Title>
        <NavLink href={"/components/filled-text-field"} label="Filled text field" />
        <NavLink href={"/components/outlined-text-field"} label="Outlined text field" />
      </div>

      <div className="ml-[210px] p-3">{children}</div>
    </div>
  );
};

export default Layout;
