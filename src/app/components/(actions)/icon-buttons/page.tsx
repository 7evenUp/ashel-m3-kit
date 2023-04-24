import { BookmarkEmpty, Download, Heart, Settings } from "iconoir-react"

import Display from "@/components/typography/Display"
import Label from "@/components/typography/Label"
import Body from "@/components/typography/Body"

import Heading from "@/components/Heading"
import Subheading from "@/components/Subheading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"

import Card from "@/lib/Card"
import IconButton from "@/lib/IconButton"
import ToggledIconButton from "@/lib/ToggledIconButton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/Tabs"

import {
  noToggleButtonCode,
  toggleButtonCode,
  usageCode,
  usageCustomCode,
} from "./codeSamples"
import InternalLink from "@/components/InternalLink"

const IconButtonsPage = () => {
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
          <InlineCode>src/components/ui/IconButton.tsx</InlineCode> и
          <InlineCode>src/components/ui/ToggledIconButton.tsx</InlineCode>
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
            <Code language="tsx" code={noToggleButtonCode} />
          </TabsContent>
          <TabsContent value="toggle" className="p-0">
            <Code language="tsx" code={toggleButtonCode} />
          </TabsContent>
        </Tabs>

        <Heading>Использование</Heading>
        <Code language="tsx" code={usageCode} />

        <Heading>Кастомизация</Heading>
        <Paragraph>
          Вам может понадобиться изменять свойство <InlineCode>fill</InlineCode>{" "}
          иконки у Toggle компонента для большего контраста. Ниже пример как
          достичь этого:
        </Paragraph>
        <Tabs defaultValue="preview" className="w-[600px]">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent
            value="preview"
            className="border border-light-outlineVariant dark:border-dark-outlineVariant rounded-md mt-1 data-[state=active]:flex justify-center"
          >
            <div className="flex flex-col items-center gap-3 mr-6">
              <Body>Без свойства fill</Body>
              <ToggledIconButton appearance="filled" defaultPressed>
                <Heart />
              </ToggledIconButton>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Body>Со свойством fill</Body>
              <ToggledIconButton appearance="filled" defaultPressed>
                <Heart className="group-data-[state=on]:fill-light-onPrimary dark:group-data-[state=on]:fill-dark-onPrimary" />
              </ToggledIconButton>
            </div>
          </TabsContent>
          <TabsContent value="code" className="p-0">
            <Code language="tsx" code={usageCustomCode} />
          </TabsContent>
        </Tabs>
        <Paragraph>
          Стили в данном случае мы применяем не к самому компоненту, а
          компоненту-иконке.
        </Paragraph>
      </div>
    </div>
  )
}

export default IconButtonsPage
