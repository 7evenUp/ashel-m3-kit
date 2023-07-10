import fs from "fs"
import path from "path"
import { BookmarkEmpty, Download, Heart, Settings } from "iconoir-react"

import Display from "@/shared/typography/Display"
import Label from "@/shared/typography/Label"

import Heading from "@/components/Heading"
import Subheading from "@/components/Subheading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"

import Card from "@/shared/ui/Card"
import IconButton from "@/shared/ui/IconButton"
import ToggledIconButton from "@/shared/ui/ToggledIconButton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs"

import { usageCode } from "./codeSamples"

const IconButtonsPage = () => {
  const noToggleComponentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "IconButton.tsx"
  )
  const toggleComponentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "ToggledIconButton.tsx"
  )

  const noToggleComponentCode = fs.readFileSync(noToggleComponentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })
  const toggleComponentCode = fs.readFileSync(toggleComponentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Icon Buttons</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>Используется тогда то тогда то</Paragraph>

        <Heading>Примеры</Heading>

        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <Subheading>No Toggle</Subheading>
            <Card appearance={"outlined"} className="flex flex-col gap-3 w-fit">
              <div className="flex items-center gap-4">
                <Label size="large" className="w-20">
                  Filled
                </Label>
                <IconButton appearance={"filled"} icon={<Heart />} />
                <IconButton
                  appearance={"filled"}
                  icon={<Settings />}
                  disabled
                />
              </div>

              <div className="flex items-center gap-4">
                <Label size="large" className="w-20">
                  Tonal
                </Label>
                <IconButton appearance={"tonal"} icon={<Heart />} />
                <IconButton appearance={"tonal"} icon={<Settings />} disabled />
              </div>

              <div className="flex items-center gap-4">
                <Label size="large" className="w-20">
                  Outlined
                </Label>
                <IconButton appearance={"outlined"} icon={<Heart />} />
                <IconButton
                  appearance={"outlined"}
                  icon={<Settings />}
                  disabled
                />
              </div>

              <div className="flex items-center gap-4">
                <Label size="large" className="w-20">
                  Standart
                </Label>
                <IconButton appearance={"standart"} icon={<Heart />} />
                <IconButton
                  appearance={"standart"}
                  icon={<Settings />}
                  disabled
                />
              </div>
            </Card>
          </div>

          <div className="flex flex-col items-center">
            <Subheading>Toggle</Subheading>
            <Card appearance={"outlined"} className="flex flex-col gap-3 w-fit">
              <div className="flex items-center gap-4">
                <Label size="large" className="w-20">
                  Filled
                </Label>
                <ToggledIconButton appearance="filled">
                  <BookmarkEmpty />
                </ToggledIconButton>
                <ToggledIconButton appearance="filled" disabled>
                  <Download />
                </ToggledIconButton>
              </div>

              <div className="flex items-center gap-4">
                <Label size="large" className="w-20">
                  Tonal
                </Label>
                <ToggledIconButton appearance="tonal">
                  <BookmarkEmpty />
                </ToggledIconButton>
                <ToggledIconButton appearance="tonal" disabled>
                  <Download />
                </ToggledIconButton>
              </div>

              <div className="flex items-center gap-4">
                <Label size="large" className="w-20">
                  Outlined
                </Label>
                <ToggledIconButton appearance="outlined">
                  <BookmarkEmpty />
                </ToggledIconButton>
                <ToggledIconButton appearance="outlined" disabled>
                  <Download />
                </ToggledIconButton>
              </div>

              <div className="flex items-center gap-4">
                <Label size="large" className="w-20">
                  Standart
                </Label>
                <ToggledIconButton appearance="standart">
                  <BookmarkEmpty />
                </ToggledIconButton>
                <ToggledIconButton appearance="standart" disabled>
                  <Download />
                </ToggledIconButton>
              </div>
            </Card>
          </div>
        </div>

        <Heading>Компоненты</Heading>
        <Paragraph>
          В данной секции представлено два компонента:{" "}
          <InlineCode>IconButton</InlineCode> и{" "}
          <InlineCode>ToggledIconButton</InlineCode>. Скопируйте и вставьте
          соотвественно в файлы{" "}
          <InlineCode>src/shared/ui/IconButton.tsx</InlineCode> и
          <InlineCode>src/shared/ui/ToggledIconButton.tsx</InlineCode>
        </Paragraph>

        <Paragraph>
          Также обратите внимание, что компоненты требуют{" "}
          <InternalLink href="/components/ui-state-layer">
            UIStateLayer
          </InternalLink>{" "}
          в качестве зависимости.
        </Paragraph>

        <Paragraph>
          Если вам необходим компонент с состоянием Toggle, то необходимо
          установить зависимость{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/toggle">
            @radix-ui/react-toggle
          </InlineLink>
        </Paragraph>

        <Code language="bash" code="yarn add @radix-ui/react-toggle" />

        <Paragraph>
          После чего можете смело копировать второй компонент
        </Paragraph>

        <Tabs defaultValue="no-toggle" className="w-[600px]">
          <TabsList>
            <TabsTrigger value="no-toggle">No Toggle</TabsTrigger>
            <TabsTrigger value="toggle">Toggle</TabsTrigger>
          </TabsList>
          <TabsContent value="no-toggle" className="p-0">
            <Code language="tsx" code={noToggleComponentCode} />
          </TabsContent>
          <TabsContent value="toggle" className="p-0">
            <Code language="tsx" code={toggleComponentCode} />
          </TabsContent>
        </Tabs>

        <Heading>Использование</Heading>
        <Code language="tsx" code={usageCode} />
      </div>
    </div>
  )
}

export default IconButtonsPage
