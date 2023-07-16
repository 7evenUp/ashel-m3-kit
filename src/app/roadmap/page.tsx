import Display from "@/shared/typography/Display"

import Paragraph from "@/components/Paragraph"
import InlineLink from "@/components/InlineLink"

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
    </main>
  )
}

export default About
