"use client";

import { cn } from "@/utils/classNames";
import { SunLight, HalfMoon } from "iconoir-react";
import { useTheme } from "next-themes";
import { FC, HTMLAttributes } from "react";

const ThemeToggle: FC<HTMLAttributes<HTMLButtonElement>> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <button
      className={cn(
        "group w-12 h-12 flex items-center justify-center rounded-full border border-light-outline dark:border-dark-outline bg-transparent",
        className
      )}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <SunLight className="group-hover:fill-dark-onSurfaceVariant" />
      ) : (
        <HalfMoon className="group-hover:fill-light-onSurfaceVariant" />
      )}
    </button>
  );
};

export default ThemeToggle;
