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

import { usageSimpleCode } from "./codeSamples"
import DatePicker from "@/shared/ui/DatePicker"
import DatePickerExample from "@/components/DatePickerExample"

const DatePickersPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Menu.tsx"
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
          <InlineCode>src/shared/ui/DatePicker.tsx</InlineCode>. Обратите внимание на
          необходимые зависимости:{" "}
          <InternalLink href="/typography/label">Label</InternalLink>.
        </Paragraph>
        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/dropdown-menu">
            @radix-ui/react-dropdown-menu
          </InlineLink>{" "}
          компонент.
        </Paragraph>

        <InstallPackage packageName="@radix-ui/react-dropdown-menu" />
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Code language="tsx" code={usageSimpleCode} />
      </div>
    </div>
  )
}

export default DatePickersPage
