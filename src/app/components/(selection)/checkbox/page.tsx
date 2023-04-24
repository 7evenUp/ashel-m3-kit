import Display from "@/components/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InternalLink from "@/components/InternalLink"
import InlineLink from "@/components/InlineLink"

import { Checkbox, CheckboxLabel } from "@/lib/Checkbox"

import { sourceCode, usageCode } from "./codeSamples"

const CheckboxPage = () => {
  return (
    <div>
      <Display className="mb-4">Checkbox</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
          Используются, когда пользователю необходимо выбрать одну или несколько
          опций из списка.
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
          <InlineCode>src/components/ui/Checkbox.tsx</InlineCode>. Обратите
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
        <Code language="tsx" code={sourceCode} />

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
