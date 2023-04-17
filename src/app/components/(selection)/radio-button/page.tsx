import Code from "@/components/Code"
import Heading from "@/components/Heading"
import InlineCode from "@/components/InlineCode"
import InternalLink from "@/components/InternalLink"
import Paragraph from "@/components/Paragraph"
import Display from "@/components/ui/text/Display"
import { RadioGroup, RadioGroupItem } from "@/lib/RadioGroup"
import { sourceCode, usageCode } from "./codeSamples"
import InlineLink from "@/components/InlineLink"

const RadioButtonPage = () => {
  return (
    <div>
      <Display className="mb-4">Radio Button</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Radio buttons позволяют пользователям выбирать один вариант из набора.
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
          <InlineCode>src/components/ui/RadioGroup.tsx</InlineCode>. Обратите
          внимание на необходимые зависимости:{" "}
          <InternalLink href="/typography/label">Label</InternalLink> и{" "}
          <InternalLink href="#">UIStateLayer</InternalLink>. В качестве иконки
          я использую{" "}
          <InlineLink href="https://iconoir.com/">iconoir-react</InlineLink>.
        </Paragraph>
        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineCode>@radix-ui/react-radio-group</InlineCode> компонент.
        </Paragraph>
        <Code language="bash" code={"yarn add @radix-ui/react-radio-group"} />
        <Code language="tsx" code={sourceCode} />

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
