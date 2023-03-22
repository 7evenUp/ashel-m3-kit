"use client";

import { SunLight, HalfMoon } from "iconoir-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="group w-12 h-12 flex items-center justify-center
                rounded-full border border-light-outline dark:border-dark-outline
                bg-transparent hover:bg-light-surfaceVariant hover:dark:bg-dark-surfaceVariant"
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else if (theme === "dark") {
          setTheme("light");
        }
      }}
    >
      {theme === "dark" ? (
        <SunLight className="group-hover:fill-white" />
      ) : (
        <HalfMoon className="group-hover:fill-black" />
      )}
    </button>
  );
};

export default ThemeToggle;
