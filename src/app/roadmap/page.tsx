import Display from "@/shared/typography/Display"
import Label from "@/shared/typography/Label"

import Paragraph from "@/components/Paragraph"
import InlineLink from "@/components/InlineLink"

import { Checkbox } from "@/shared/ui/Checkbox"

import { cn } from "@/lib/cn"

export const metadata = {
  title: "Ashel M3 Kit | Roadmap",
  description: "Roadmap of Ashel M3 Kit",
}

const About = () => {
  return (
    <main className="p-10 flex flex-col gap-3">
      <Display>Дорожная карта (Roadmap)</Display>
      <Paragraph>
        Я работаю над этим проектом один. Также параллельно работаю, поэтому
        физически не могу уделять сайту много времени.
      </Paragraph>
      <Paragraph>
        <InlineLink href="https://github.com/7evenUp/ashel-ui-kit">
          Поддержка приветствуется
        </InlineLink>{" "}
        🙂
      </Paragraph>

      <div className="flex flex-col gap-3 mt-10">
        <RoadmapItem checked>
          Add <b>npm</b> and <b>pnpm</b> variants for adding packages
        </RoadmapItem>
        <RoadmapItem checked>Fix Title docs</RoadmapItem>
        <RoadmapItem>Templates (Парочка готовых UI шаблонов)</RoadmapItem>
        <RoadmapItem>CSS transitions according to M3</RoadmapItem>
        <RoadmapItem>Tailwind config page</RoadmapItem>
        <RoadmapItem>
          Improve Guides section for <b>Forms</b>
        </RoadmapItem>
        <RoadmapItem>Continue implementing M3 components</RoadmapItem>
        <RoadmapItem>Add English translations</RoadmapItem>
        <RoadmapItem checked>Fix width of SegmentedButton. Add icons</RoadmapItem>
        <RoadmapItem>Implement Chip Component</RoadmapItem>
      </div>
    </main>
  )
}

const RoadmapItem = ({
  children,
  checked = false,
}: {
  children: React.ReactNode
  checked?: boolean
}) => (
  <div className="flex items-center gap-4">
    <Checkbox defaultChecked={checked} />
    <Label size="large" className={cn(checked && "line-through")}>
      {children}
    </Label>
  </div>
)

export default About
