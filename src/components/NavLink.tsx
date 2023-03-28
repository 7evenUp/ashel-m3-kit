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
      className="group flex flex-col items-start gap-1 rounded-full outline-offset-0"
    >
      <div
        className={cn(
          "rounded-full w-full",
          isActive &&
            "bg-light-secondaryContainer dark:bg-dark-secondaryContainer"
        )}
      >
        <UIStateLayer
          className={cn(
            "py-1 px-4 rounded-full",
            isActive
              ? "bg-light-onSurface dark:bg-dark-onSurface"
              : "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant"
          )}
        >
          <Title
            className={
              isActive
                ? "text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer"
                : "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
            }
          >
            {label}
          </Title>
        </UIStateLayer>
      </div>
    </Link>
  );
};

export default NavLink;
