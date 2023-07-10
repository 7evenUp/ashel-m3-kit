import fs from "fs"
import path from "path"

import Display from "@/shared/typography/Display"
import { Checkbox, CheckboxLabel } from "@/shared/ui/Checkbox"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InternalLink from "@/components/InternalLink"
import InlineLink from "@/components/InlineLink"

import { usageCode } from "./codeSamples"

const CheckboxPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Checkbox.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Checkbox</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
          Используются, когда пользователю необходимо выбрать одну или несколько
          опций из списка.
        </Paragraph>

        <Paragraph>
          Подробнее об использовании элемента читайте на{" "}
          <InlineLink href="https://m3.material.io/components/checkbox/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>

        <div className="flex items-center gap-4">
          <Checkbox defaultChecked id="milk" />
          <CheckboxLabel htmlFor="milk">Купить молоко</CheckboxLabel>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox id="world" />
          <CheckboxLabel htmlFor="world">Покорить мир</CheckboxLabel>
        </div>

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/Checkbox.tsx</InlineCode>. Обратите
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
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/checkbox">
            @radix-ui/react-checkbox
          </InlineLink>{" "}
          компонент.
        </Paragraph>
        <Code language="bash" code={"yarn add @radix-ui/react-checkbox"} />
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>
          Данный файл экспортирует два компонента:{" "}
          <InlineCode>CheckboxLabel</InlineCode> и{" "}
          <InlineCode>Checkbox</InlineCode>. Первый является текстом для
          чекбокса, второй же - сам чекбокс.
        </Paragraph>
        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Code language="tsx" code={usageCode} />
      </div>
    </div>
  )
}

export default CheckboxPage
