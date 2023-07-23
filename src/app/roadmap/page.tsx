import Display from "@/shared/typography/Display"

import Paragraph from "@/components/Paragraph"
import InlineLink from "@/components/InlineLink"
import { Checkbox } from "@/shared/ui/Checkbox"
import Label from "@/shared/typography/Label"

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
        <div className="flex items-center gap-4">
          <Checkbox />
          <Label size="large">Templates (Парочка готовых UI шаблонов)</Label>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox />
          <Label size="large">CSS transitions according to M3</Label>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox />
          <Label size="large">Tailwind config page</Label>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox />
          <Label size="large">Add <b>npm</b> and <b>pnpm</b> variants for adding packages</Label>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox />
          <Label size="large">Improve Guides section for <b>Forms</b></Label>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox />
          <Label size="large">Continue implementing M3 components</Label>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox />
          <Label size="large">Add English translations</Label>
        </div>
      </div>
    </main>
  )
}

export default About
