import fs from "fs"
import path from "path"
import { Calendar } from "iconoir-react"

import Display from "@/shared/typography/Display"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs"
import AssistChip from "@/shared/ui/Chips/AssistChip"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import InstallPackage from "@/components/InstallPackage"

import { usageOneHandleCode, usageTwoHandlesCode } from "./codeSamples"

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

        <Heading>Примеры</Heading>

        <AssistChip appearance="elevated">Elevated</AssistChip>
        <AssistChip appearance="outlined">Outlined</AssistChip>

        <AssistChip
          appearance="elevated"
          icon={<Calendar width={18} height={18} />}
        >
          Elevated
        </AssistChip>
        <AssistChip
          appearance="outlined"
          icon={<Calendar width={18} height={18} />}
        >
          Outlined
        </AssistChip>

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/Chips/AssistChip.tsx</InlineCode>. Обратите
          внимание на необходимые зависимости:{" "}
          <InternalLink href="/typography/label">Label</InternalLink> и{" "}
          <InternalLink href="/components/ui-state-layer">
            UIStateLayer
          </InternalLink>
        </Paragraph>

        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/slider">
            @radix-ui/react-slider
          </InlineLink>{" "}
          компонент.
        </Paragraph>

        <InstallPackage packageName="@radix-ui/react-slider" />
        <Code language="tsx" code={assistCode} />

        <Heading>Использование</Heading>
        <Paragraph>Ниже - код для примеров в начале страницы.</Paragraph>
        <Tabs defaultValue="oneHandle" className="w-[600px]">
          <TabsList>
            <TabsTrigger value="oneHandle">Один ползунок</TabsTrigger>
            <TabsTrigger value="twoHandles">Два ползунка</TabsTrigger>
          </TabsList>
          <TabsContent value="oneHandle" className="p-0">
            <Code language="tsx" code={usageOneHandleCode} />
          </TabsContent>
          <TabsContent value="twoHandles" className="p-0">
            <Code language="tsx" code={usageTwoHandlesCode} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ChipsPage
