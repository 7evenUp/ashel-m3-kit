import NavLink from "@/components/NavLink";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      
      <div className="w-[180px] fixed left-[100px] h-screen top-0 p-3 border-r bg-light-surface dark:bg-dark-surface border-light-outlineVariant dark:border-dark-outlineVariant text-light-onSurface dark:text-dark-onSurface flex flex-col gap-[1px]">
        <NavLink href={"/colors"} label="Overview" />
        <NavLink href={"/colors/color-roles"} label="Color roles" />
        <NavLink href={"/colors/surfaces"} label="Surfaces" />
      </div>

      <div className="ml-[180px] p-3">
      {children}
      </div>
      
    </div>
  );
};

export default Layout;
