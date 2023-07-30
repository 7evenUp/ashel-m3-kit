import fs from "fs"
import path from "path"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InstallPackage from "@/components/InstallPackage"
import PopoverExample from "@/components/PopoverExample"

import Display from "@/shared/typography/Display"

import { usageCode } from "./codeSamples"

const PopoverPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Popover.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Popover</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Отображает расширенный контент в portal, запускаемый нажатием кнопки.
        </Paragraph>
        <Paragraph>
          Этого элемента нет в официальной документации. Компонент построен на
          основании основных стайл гайдов.
        </Paragraph>

        <Heading>Примеры</Heading>
        <PopoverExample />

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/Popover.tsx</InlineCode>.
        </Paragraph>
        <Paragraph>
          Данный компонент использует{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/popover">
            @radix-ui/react-popover
          </InlineLink>{" "}
          компонент.
        </Paragraph>
        <InstallPackage packageName="@radix-ui/react-popover" />
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Code language="tsx" code={usageCode} />
      </div>
    </div>
  )
}

export default PopoverPage
