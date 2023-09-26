import fs from "fs"
import path from "path"

import Display from "@/shared/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import InstallPackage from "@/components/InstallPackage"
import DatePickerExample from "@/components/DatePickerExample"

import { usageSimpleCode } from "./codeSamples"

const DatePickersPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "DatePicker.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Date picker</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
          Date pickers позволяют пользователям выбирать дату или диапазон дат.
        </Paragraph>

        <Paragraph>
          Подробнее об использовании элемента читайте на{" "}
          <InlineLink href="https://m3.material.io/components/date-pickers/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <DatePickerExample />

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/DatePicker.tsx</InlineCode>. Обратите
          внимание на необходимые зависимости:{" "}
          <InternalLink href="/components/common-buttons">Button</InternalLink>.
        </Paragraph>

        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineLink href="https://react-day-picker.js.org/">
            react-day-picker
          </InlineLink>{" "}
          и{" "}
          <InlineLink href="https://date-fns.org/">
            https://date-fns.org/
          </InlineLink>
        </Paragraph>

        <InstallPackage packageName="react-day-picker date-fns" />
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>

        <Paragraph>
          Для корректной работы, вам так же понадобятся компонент{" "}
          <InternalLink href="/components/outlined-text-field">
            OutlinedTextField
          </InternalLink>{" "}
          и{" "}
          <InlineLink href="https://www.radix-ui.com/primitives/docs/components/popover">
            @radix-ui/react-popover
          </InlineLink>
        </Paragraph>
        <InstallPackage packageName="@radix-ui/react-popover" />

        <Code language="tsx" code={usageSimpleCode} />
      </div>
    </div>
  )
}

export default DatePickersPage
