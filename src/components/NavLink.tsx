"use client";

import { cn } from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import Title from "./ui/text/Title";
import UIStateLayer from "./ui/UIStateLayer";

interface Props {
  href: string;
  label: string;
}

const NavLink: FC<Props> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={cn(
        "min-h-[48px] group w-full rounded-full outline-offset-0",
        isActive
          ? "bg-light-secondaryContainer dark:bg-dark-secondaryContainer text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer"
          : "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
      )}
    >
      <UIStateLayer
        className={cn(
          "px-4 rounded-full flex items-center",
          isActive
            ? "bg-light-onSurface dark:bg-dark-onSurface"
            : "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant"
        )}
      >
        <Title>{label}</Title>
      </UIStateLayer>
    </Link>
  );
};

export default NavLink;
