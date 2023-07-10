import fs from "fs"
import path from "path"

import Display from "@/shared/typography/Display"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/RadioGroup"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InternalLink from "@/components/InternalLink"
import InlineLink from "@/components/InlineLink"

import { usageCode } from "./codeSamples"

const RadioButtonPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "RadioGroup.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Radio Button</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Radio buttons позволяют пользователям выбирать один вариант из набора.
        </Paragraph>

        <Paragraph>
          Подробнее об использовании элемента читайте на{" "}
          <InlineLink href="https://m3.material.io/components/radio-button/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <RadioGroup>
          <RadioGroupItem value="x" id="x">
            First
          </RadioGroupItem>
          <RadioGroupItem value="y" id="y">
            Second
          </RadioGroupItem>
          <RadioGroupItem value="z" id="z">
            Third
          </RadioGroupItem>
        </RadioGroup>

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/RadioGroup.tsx</InlineCode>. Обратите
          внимание на необходимые зависимости:{" "}
          <InternalLink href="/typography/label">Label</InternalLink> и{" "}
          <InternalLink href="/components/ui-state-layer">
            UIStateLayer
          </InternalLink>
          . В качестве иконки я использую{" "}
          <InlineLink href="https://iconoir.com/">iconoir-react</InlineLink>.
        </Paragraph>
        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/radio-group">
            @radix-ui/react-radio-group
          </InlineLink>{" "}
          компонент.
        </Paragraph>
        <Code language="bash" code={"yarn add @radix-ui/react-radio-group"} />
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>
          Данный файл экспортирует два компонента:{" "}
          <InlineCode>RadioGroup</InlineCode> и{" "}
          <InlineCode>RadioGroupItem</InlineCode>. Первый является компонентом,
          хранящий стейт выбранной опции, второй - является самой radio кнопкой
          с label, который создаётся при указывании children.
        </Paragraph>
        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Code language="tsx" code={usageCode} />
      </div>
    </div>
  )
}

export default RadioButtonPage
