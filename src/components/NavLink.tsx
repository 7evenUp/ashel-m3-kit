"use client";

import { cn } from "@/utils/classNames";
import { RouteType } from "next/dist/lib/load-custom-routes";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import Title from "./ui/text/Title";
import UIStateLayer from "./ui/UIStateLayer";

interface Props extends LinkProps<RouteType> {
  label: string
}

const NavLink: FC<Props> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-1 rounded-md outline-offset-4"
    >
      <div
        className={cn(
          "rounded-full",
          isActive &&
            "bg-light-secondaryContainer dark:bg-dark-secondaryContainer"
        )}
      >
        <UIStateLayer
          className={cn(
            "py-1 px-4 rounded-full bg-opacity-0 dark:bg-opacity-0 group-hover:bg-opacity-[0.08] group-active:bg-opacity-[0.12]",
            isActive
              ? "bg-light-onSurface dark:bg-dark-onSurface"
              : "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant"
          )}
        >
          <Title
            size={"small"}
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
