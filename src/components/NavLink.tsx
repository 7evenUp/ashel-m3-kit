"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavLink = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link href={href} className="group flex flex-col items-center gap-1">
      <div
        className={`py-1 px-4 rounded-full transition-all ${
          isActive
            ? "bg-light-secondaryContainer dark:bg-dark-secondaryContainer group-hover:bg-light-secondary group-hover:dark:bg-dark-secondary group-hover:bg-opacity-90 group-active:bg-opacity-90"
            : "group-hover:bg-light-onSurfaceVariant group-hover:dark:bg-dark-onSurfaceVariant group-hover:bg-opacity-10 group-active:bg-opacity-20"
        }`}
      >
        <span
          className={
            isActive
              ? "text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer"
              : "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
          }
        >
          {icon}
        </span>
      </div>
      <span
        className={`font-medium text-xs tracking=[0.5px] ${
          isActive
            ? "text-light-onSurface dark:text-dark-onSurface"
            : "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
        }`}
      >
        {title}
      </span>
    </Link>
  );
};

export default NavLink;
