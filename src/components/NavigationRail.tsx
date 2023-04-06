import ThemeToggle from "./ThemeToggle";
import { HomeSimple, TextSize, ColorFilter, Puzzle } from "iconoir-react";
import NavLinkWithIcon from "./NavLinkWithIcon";

const NavigationRail = () => {
  return (
    <div
      className="bg-light-surface dark:bg-dark-surface text-light-onSurface dark:text-dark-onSurface
                fixed top-0 left-0 flex flex-col gap-3 h-screen min-w-[100px] items-center justify-between border-r border-light-outlineVariant dark:border-dark-outlineVariant"
    >
      <nav className="flex flex-col items-center gap-3 justify-center mt-5">
        <NavLinkWithIcon href="/about" label="About" icon={<HomeSimple />} />
        <NavLinkWithIcon href="/typography" label="Typography" icon={<TextSize />} />
        <NavLinkWithIcon href="/colors" label="Colors" icon={<ColorFilter />} />
        <NavLinkWithIcon href="/components" label="Components" icon={<Puzzle />} />
      </nav>

      <ThemeToggle className="mb-4" />
    </div>
  );
};

export default NavigationRail;
