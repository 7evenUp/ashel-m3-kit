import ThemeToggle from "./ThemeToggle";
import { Code, HomeSimple } from "iconoir-react";
import NavLink from "./NavLink";

const NavigationRail = () => {
  return (
    <nav
      className="bg-light-surface dark:bg-dark-surface text-light-onSurface dark:text-dark-onSurface
                    fixed top-0 left-0 flex flex-col gap-3 px-3 h-full min-w-[80px] items-center justify-center shadow-lg"
    >
      <ul className="flex flex-col items-center gap-3 justify-center">
        <li>
          <NavLink href="/about" title="About" icon={<HomeSimple />} />
        </li>
        <li>
          <NavLink
            href="/documentation"
            title="Docs"
            icon={<Code />}
          />
        </li>
      </ul>

      <ThemeToggle />
    </nav>
  );
};

export default NavigationRail;
