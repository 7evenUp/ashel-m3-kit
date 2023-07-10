import fs from "fs"
import path from "path"
import { Cart, Message } from "iconoir-react"

import Display from "@/shared/typography/Display"
import IconButton from "@/shared/ui/IconButton"
import Badge from "@/shared/ui/Badge"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import InternalLink from "@/components/InternalLink"
import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"

import { badgeUsage } from "./codeSamples"

const BadgesPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Badge.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Badges</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Подробнее об использовании элемента читайте на{" "}
          <InlineLink href="https://shared.material.io/components/badges/specs">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <div className="flex gap-4">
          <div className="relative">
            <IconButton appearance="tonal" icon={<Message />} />
            <Badge className="top-2" size="small" />
          </div>
          <div className="relative">
            <IconButton appearance="tonal" icon={<Cart />} />
            <Badge size="large">11</Badge>
          </div>
        </div>

        <Heading>Компонент</Heading>
        <Paragraph>
          Прямые зависимости:{" "}
          <InternalLink href="/typography/label">Label</InternalLink>
        </Paragraph>
        <Paragraph>
          Сохраните компонент в файл{" "}
          <InlineCode>src/shared/ui/Badge.tsx</InlineCode>
        </Paragraph>
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>
          Компонент использует позиционирование{" "}
          <InlineCode>absolute</InlineCode>. Однако можно использовать свои
          реализации. Просто пишите свои CSS стили в{" "}
          <InlineCode>className</InlineCode> prop компонента.
        </Paragraph>
        <Paragraph>
          Код для компонентов в секции <InlineCode>Примеры</InlineCode>:{" "}
        </Paragraph>
        <Code language="tsx" code={badgeUsage} />
      </div>
    </div>
  )
}

export default BadgesPage
