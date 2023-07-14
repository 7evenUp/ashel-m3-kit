import fs from "fs"
import path from "path"
import { AddUser, Copy } from "iconoir-react"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"

import Display from "@/shared/typography/Display"

import RichTooltip from "@/shared/ui/RichTooltip"
import PlainTooltip from "@/shared/ui/PlainTooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs"
import IconButton from "@/shared/ui/IconButton"
import Button from "@/shared/ui/Button"

import { usagePlain, usageRich } from "./codeSamples"

const TooltipPage = () => {
  const plainTooltipFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "PlainTooltip.tsx"
  )
  const plainTooltipCode = fs.readFileSync(plainTooltipFilePath, {
    encoding: "utf-8",
    flag: "r",
  })
  const richTooltipFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "RichTooltip.tsx"
  )
  const richTooltipCode = fs.readFileSync(richTooltipFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Dialog</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Tooltips отображают краткие надписи или сообщения.
        </Paragraph>
        <Paragraph>
          Подробнее об использовании элемента читайте на{" "}
          <InlineLink href="https://m3.material.io/components/tooltips/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Plain Tooltip</Heading>
        <div className="flex gap-3">
          <PlainTooltip content="Это обычный tooltip">
            <Button appearance="tonal">Показать tooltip</Button>
          </PlainTooltip>
          <PlainTooltip content="Скопировать">
            <IconButton appearance="tonal" icon={<Copy />} />
          </PlainTooltip>
        </div>
        <Paragraph>
          Наведи{" "}
          <PlainTooltip
            content="Отступ для текста - 8px, вместо 4px для кнопок"
            sideOffset={8}
            triggerAsChild={false}
          >
            <span className="font-medium">сюда</span>
          </PlainTooltip>{" "}
          чтобы увидеть подсказку
        </Paragraph>

        <Heading>Rich Tooltip</Heading>
        <RichTooltip
          subhead="Добавить знакомых"
          supportingText="Поделитесь коллекцией со своими друзьями и знакомыми. Люди, которых вы добавите в этот альбом, так же будут иметь право добавлять и удалять медиа."
          action={<Button appearance="text">Узнать больше</Button>}
        >
          <IconButton appearance="tonal" icon={<AddUser />} />
        </RichTooltip>

        <Heading>Компоненты</Heading>
        <Paragraph>
          Оба компонента можно сохранить в{" "}
          <InlineCode>src/shared/ui/PlainTooltip.tsx</InlineCode> и в{" "}
          <InlineCode>src/shared/ui/RichTooltip.tsx</InlineCode> соответственно.
        </Paragraph>
        <Paragraph>
          Обратите внимание на необходимые зависимости для компонента{" "}
          <InlineCode>PlainTooltip</InlineCode>:{" "}
          <InternalLink href="/typography/body">Body</InternalLink>
        </Paragraph>
        <Paragraph>
          Для компонента <InlineCode>RichTooltip</InlineCode> уже понадобятся:{" "}
          <InternalLink href="/typography/body">Body</InternalLink> и{" "}
          <InternalLink href="/typography/title">Title</InternalLink>
        </Paragraph>
        <Paragraph>
          Оба компонента используют{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/tooltip">
            @radix-ui/react-tooltip
          </InlineLink>{" "}
          компонент.
        </Paragraph>
        <Code language="bash" code={"yarn add @radix-ui/react-tooltip"} />

        <Tabs defaultValue="plain" className="w-[600px]">
          <TabsList>
            <TabsTrigger value="plain">Plain Tooltip</TabsTrigger>
            <TabsTrigger value="rich">Rich Tooltip</TabsTrigger>
          </TabsList>
          <TabsContent value="plain" className="p-0">
            <Code language="tsx" code={plainTooltipCode} />
          </TabsContent>
          <TabsContent value="rich" className="p-0">
            <Code language="tsx" code={richTooltipCode} />
          </TabsContent>
        </Tabs>

        <Heading>Использование</Heading>

        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Tabs defaultValue="usagePlain" className="w-[600px]">
          <TabsList>
            <TabsTrigger value="usagePlain">Plain Tooltip</TabsTrigger>
            <TabsTrigger value="usageRich">Rich Tooltip</TabsTrigger>
          </TabsList>
          <TabsContent value="usagePlain" className="p-0">
            <Code language="tsx" code={usagePlain} />
          </TabsContent>
          <TabsContent value="usageRich" className="p-0">
            <Code language="tsx" code={usageRich} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default TooltipPage
