import NavLink from "@/components/NavLink";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      
      <div className="w-[180px] fixed left-[100px] h-screen top-0 p-3 border-r border-light-outlineVariant dark:border-dark-outlineVariant text-light-onSurface dark:text-dark-onSurface flex flex-col gap-[1px]">
        <NavLink href={"/typography"} label="Overview" />
        <NavLink href={"/typography/display"} label="Display" />
        <NavLink href={"/typography/headline"} label="Headline" />
        <NavLink href={"/typography/title"} label="Title" />
        <NavLink href={"/typography/body"} label="Body" />
        <NavLink href={"/typography/label"} label="Label" />
      </div>

      <div className="ml-[180px] p-3">
      {children}
      </div>
      
    </div>
  );
};

export default Layout;
