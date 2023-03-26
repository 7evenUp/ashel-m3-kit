import NavLink from "@/components/NavLink";
import Title from "@/components/ui/text/Title";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="w-[190px] fixed left-[100px] h-screen top-0 p-3 border-r bg-light-surface dark:bg-dark-surface border-light-outlineVariant dark:border-dark-outlineVariant text-light-onSurface dark:text-dark-onSurface flex flex-col gap-[1px]">
        <NavLink href={"/components"} label="Overview" />

        <Title size="large" className="mt-2 text-xl">Actions</Title>
        <NavLink href={"/components/common-buttons"} label="Common buttons" />
        <NavLink href={"/components/icon-buttons"} label="Icon buttons" />

        <Title size="large" className="mt-2 text-xl">Communication</Title>
        <NavLink href={"/components/badges"} label="Badges" />
        <NavLink href={"/components/snackbar"} label="Snackbar" />

        <Title size="large" className="mt-2 text-xl">Containment</Title>
        <NavLink href={"/components/cards"} label="Cards" />
        <NavLink href={"/components/dialogs"} label="Dialog" />

        <Title size="large" className="mt-2 text-xl">Navigation</Title>
        <NavLink href={"/components/navigation-bar"} label="Navigation bar" />
        <NavLink href={"/components/navigation-drawer"} label="Navigation drawer" />

        <Title size="large" className="mt-2 text-xl">Selection</Title>
        <NavLink href={"/components/checkbox"} label="Checkbox" />
        <NavLink href={"/components/radio-button"} label="Radio button" />
        <NavLink href={"/components/chips"} label="Chips" />
        <NavLink href={"/components/switch"} label="Switch" />

        <Title size="large" className="mt-2 text-xl">Text Inputs</Title>
        <NavLink href={"/components/filled-text-field"} label="Filled text field" />
        <NavLink href={"/components/outlined-text-field"} label="Outlined text field" />
      </div>

      <div className="ml-[190px] p-3">{children}</div>
    </div>
  );
};

export default Layout;
