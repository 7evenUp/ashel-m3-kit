import fs from "fs"
import path from "path"

import Display from "@/shared/typography/Display"
import Body from "@/shared/typography/Body"
import Card from "@/shared/ui/Card"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"

import { usageCode } from "./codeSamples"
import SwitchExample from "@/components/SwitchExample"

const SwitchPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Switch.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Switch</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Switch включает или выключает состояние отдельного элемента. Подробнее
          на{" "}
          <InlineLink href="https://shared.material.io/components/switch/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <SwitchExample />

        <Heading>Компонент</Heading>
        <Card
          appearance="outlined"
          className="w-fit my-4 bg-yellow-200 bg-opacity-20 border-yellow-400 dark:bg-yellow-300 dark:bg-opacity-50 dark:border-yellow-100"
        >
          <Body>
            Данный компонент будет переделан в будущем под{" "}
            <InlineLink href="https://www.radix-ui.com/docs/primitives/components/switch">
              @radix-ui/react-switch
            </InlineLink>
            .
          </Body>
        </Card>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/Switch.tsx</InlineCode>.
        </Paragraph>
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>

        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Code language="tsx" code={usageCode} />
      </div>
    </div>
  )
}

export default SwitchPage
