import NavLink from "@/components/NavLink";
import Headline from "@/components/ui/text/Headline";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between">
      {children}
      <div className="p-3 bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-xl flex flex-col gap-3">
        <Headline>Table of contents</Headline>
        <NavLink href={"/typography/display"} label="Display" />
        <NavLink href={"/typography/headline"} label="Headline" />
        <NavLink href={"/typography/title"} label="Title" />
        <NavLink href={"/typography/body"} label="Body" />
        <NavLink href={"/typography/label"} label="Label" />
      </div>
    </div>
  );
};

export default Layout;
