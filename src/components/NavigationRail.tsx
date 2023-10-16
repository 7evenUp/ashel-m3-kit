import {
  HomeSimple,
  TextSize,
  ColorFilter,
  Puzzle,
  Code,
  BookStack,
  Map,
  MultiplePages,
} from "iconoir-react"

import ThemeToggle from "./ThemeToggle"
import NavLinkWithIcon from "./NavLinkWithIcon"

const NavigationRail = () => {
  return (
    <div className="bg-surface text-onSurface fixed top-0 left-0 flex flex-col gap-3 h-screen min-w-[100px] items-center justify-between border-r border-outlineVariant">
      <nav className="flex flex-col items-center gap-3 justify-center mt-5">
        <NavLinkWithIcon href="/about" label="About" icon={<HomeSimple />} />
        <NavLinkWithIcon href="/intro" label="Introduction" icon={<Code />} />
        <NavLinkWithIcon
          href="/typography"
          label="Typography"
          icon={<TextSize />}
        />
        <NavLinkWithIcon href="/colors" label="Colors" icon={<ColorFilter />} />
        <NavLinkWithIcon
          href="/components"
          label="Components"
          icon={<Puzzle />}
        />
        <NavLinkWithIcon href="/guides" label="Guides" icon={<BookStack />} />
        <NavLinkWithIcon
          href="/templates"
          label="Templates"
          icon={<MultiplePages />}
        />
        <div className="h-px w-full bg-outlineVariant" />
        <NavLinkWithIcon href="/roadmap" label="Roadmap" icon={<Map />} />
      </nav>

      <ThemeToggle className="mb-4" />
    </div>
  )
}

export default NavigationRail
