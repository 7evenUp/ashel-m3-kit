import fs from "fs"
import path from "path"

import Display from "@/shared/typography/Display"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import InstallPackage from "@/components/InstallPackage"

import { usageCode } from "./codeSamples"

const TabsPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Tabs.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Tabs</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
          Tabs полезны для переключения между представлениями отдельных и
          связанных групп информации.
        </Paragraph>

        <Paragraph>
          Подробнее об использовании элемента читайте на{" "}
          <InlineLink href="https://m3.material.io/components/tabs/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <Tabs className="w-[500px]" defaultValue="x">
          <TabsList>
            <TabsTrigger value="x">First</TabsTrigger>
            <TabsTrigger value="y">Second</TabsTrigger>
            <TabsTrigger value="z">Third</TabsTrigger>
          </TabsList>
          <TabsContent value="x">First content</TabsContent>
          <TabsContent value="y">Second content</TabsContent>
          <TabsContent value="z">Third content</TabsContent>
        </Tabs>

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/Tabs.tsx</InlineCode>. Обратите внимание
          на необходимые зависимости:{" "}
          <InternalLink href="/typography/title">Title</InternalLink> и{" "}
          <InternalLink href="/components/ui-state-layer">
            UIStateLayer
          </InternalLink>
          .
        </Paragraph>
        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/tabs">
            @radix-ui/react-tabs
          </InlineLink>{" "}
          компонент.
        </Paragraph>

        <InstallPackage packageName="@radix-ui/react-tabs" />
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>
          Данный файл экспортирует 4 компонента: <InlineCode>Tabs</InlineCode> -
          компонент-обёртка, содержащая весь стейт компонента,{" "}
          <InlineCode>TabsList</InlineCode> - компонент-список, в котором
          располагаются кнопки, <InlineCode>TabsTrigger</InlineCode> -
          компонент-кнопка, которая служит для переключения самих табов,{" "}
          <InlineCode>TabsContent</InlineCode> - компонент, содержащий контент,
          относящийся к определённому табу.
        </Paragraph>
        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Code language="tsx" code={usageCode} />
      </div>
    </div>
  )
}

export default TabsPage
