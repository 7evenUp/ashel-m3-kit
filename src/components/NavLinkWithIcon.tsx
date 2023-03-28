"use client";

import { cn } from "@/utils/classNames";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";
import Label from "./ui/text/Label";
import UIStateLayer from "./ui/UIStateLayer";

const NavLinkWithIcon = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) => {
  const segment = useSelectedLayoutSegment();
  const isActive = href.split("/")[1] === segment;

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
            "py-1 px-4 rounded-full",
            isActive
              ? "bg-light-onSurface dark:bg-dark-onSurface"
              : "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant"
          )}
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

export default NavLinkWithIcon;
