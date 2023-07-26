import fs from "fs"
import path from "path"
import { Calendar } from "iconoir-react"

import Display from "@/shared/typography/Display"
import Label from "@/shared/typography/Label"

import AssistChip from "@/shared/ui/Chips/AssistChip"
import FilterChipExample from "@/components/FilterChipExample"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import Subheading from "@/components/Subheading"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import InstallPackage from "@/components/InstallPackage"

import { usageAssist } from "./codeSamples"

const ChipsPage = () => {
  const assistFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Chips",
    "AssistChip.tsx"
  )
  const assistCode = fs.readFileSync(assistFilePath, {
    encoding: "utf-8",
    flag: "r",
  })
  const filterFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Chips",
    "FilterChip.tsx"
  )
  const filterCode = fs.readFileSync(filterFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Chips</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Chips помогают людям вводить информацию, делать выбор, фильтровать
          содержимое или запускать действия
        </Paragraph>

        <Paragraph>
          Подробнее об использовании элемента читайте на{" "}
          <InlineLink href="https://m3.material.io/components/chips/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>AssistChip</Heading>

        <Subheading>Примеры</Subheading>

        <div className="w-fit grid grid-rows-3 grid-cols-3 gap-2">
          <Label size="large" className="col-start-2 place-self-center">
            Без иконки
          </Label>
          <Label size="large" className="place-self-center">
            С иконкой
          </Label>
          <Label size="large" className="place-self-center">
            Elevated
          </Label>
          <AssistChip className="place-self-center" appearance="elevated">
            Elevated
          </AssistChip>
          <AssistChip
            className="place-self-center"
            appearance="elevated"
            icon={<Calendar width={18} height={18} />}
          >
            Elevated
          </AssistChip>
          <Label size="large" className="place-self-center">
            Outlined
          </Label>
          <AssistChip className="place-self-center" appearance="outlined">
            Outlined
          </AssistChip>
          <AssistChip
            className="place-self-center"
            appearance="outlined"
            icon={<Calendar width={18} height={18} />}
          >
            Outlined
          </AssistChip>
        </div>

        <Subheading>Компонент</Subheading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/Chips/AssistChip.tsx</InlineCode>. Обратите
          внимание на необходимые зависимости:{" "}
          <InternalLink href="/typography/label">Label</InternalLink> и{" "}
          <InternalLink href="/components/ui-state-layer">
            UIStateLayer
          </InternalLink>
        </Paragraph>

        <Code language="tsx" code={assistCode} />

        <Heading>Использование</Heading>
        <Paragraph>
          Обратите внимание, что по стайл гайдам размеры иконок уменьшены с
          24x24 до 18x18. Вам придётся делать это вручную.
        </Paragraph>
        <Code language="tsx" code={usageAssist} />

        <Heading>FilterChip</Heading>

        <Subheading>Примеры</Subheading>
        <FilterChipExample />

        <Subheading>Компонент</Subheading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/Chips/FilterChip.tsx</InlineCode>. Обратите
          внимание на необходимые зависимости:{" "}
          <InternalLink href="/typography/label">Label</InternalLink> и{" "}
          <InternalLink href="/components/ui-state-layer">
            UIStateLayer
          </InternalLink>
        </Paragraph>

        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/toggle">
            @radix-ui/react-toggle
          </InlineLink>{" "}
          компонент.
        </Paragraph>

        <InstallPackage packageName="@radix-ui/react-toggle" />

        <Code language="tsx" code={filterCode} />

        <Heading>Использование</Heading>
        <Paragraph>
          Обратите внимание, что по стайл гайдам размеры иконок уменьшены с
          24x24 до 18x18. Вам придётся делать это вручную.
        </Paragraph>
        <Code language="tsx" code={usageAssist} />
      </div>
    </div>
  )
}

export default ChipsPage
