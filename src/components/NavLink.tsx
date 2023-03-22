"use client";

import { cn } from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Label from "./ui/text/Label";
import UIStateLayer from "./ui/UIStateLayer";

const NavLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link href={href} className="group flex flex-col items-center gap-1">
      <div
        className={cn(
          "rounded-full",
          isActive && 'bg-light-secondaryContainer dark:bg-dark-secondaryContainer'
          // isActive
          //   ? "bg-light-secondaryContainer dark:bg-dark-secondaryContainer group-hover:bg-light-onSurface group-hover:dark:bg-dark-secondary group-hover:bg-opacity-90 group-active:bg-opacity-90"
          //   : "group-hover:bg-light-onSurfaceVariant group-hover:dark:bg-dark-onSurfaceVariant group-hover:bg-opacity-10 group-active:bg-opacity-20"
        )}
      >
        <UIStateLayer className={cn(
          'py-1 px-4 rounded-full bg-opacity-0 dark:bg-opacity-0 group-hover:bg-opacity-[0.08] group-active:bg-opacity-[0.12] group-focus:bg-opacity-[0.12]',
          isActive
            ? "bg-light-onSurface dark:bg-dark-onSurface"
            : "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant"
        )}>
          <span
            className={
              isActive
                ? "text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer"
                : "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
            }
          >
            {icon}
          </span>
        </UIStateLayer>
      </div>
      <Label
        className={cn(
          !isActive &&
            "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
        )}
      >
        {label}
      </Label>
    </Link>
  );
};

export default NavLink;
