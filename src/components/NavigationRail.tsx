import ThemeToggle from "./ThemeToggle";
import { Code, HomeSimple, TextSize } from "iconoir-react";
import NavLink from "./NavLink";

const NavigationRail = () => {
  return (
    <div
      className="bg-light-surface dark:bg-dark-surface text-light-onSurface dark:text-dark-onSurface
                fixed top-0 left-0 flex flex-col gap-3 px-3 h-screen min-w-[80px] items-center justify-between shadow-lg"
    >
      <nav className="flex flex-col items-center gap-3 justify-center mt-5">
        <NavLink href="/about" label="About" icon={<HomeSimple />} />
        <NavLink href="/documentation" label="Docs" icon={<Code />} />
        <NavLink href="/typography" label="Typography" icon={<TextSize />} />
      </nav>

      <ThemeToggle className="mb-4" />
    </div>
  );
};

export default NavigationRail;
