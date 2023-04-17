"use client"

import Code from "@/components/Code"
import Heading from "@/components/Heading"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import Paragraph from "@/components/Paragraph"
import Display from "@/components/ui/text/Display"
import Label from "@/components/ui/text/Label"
import Switch from "@/lib/Switch"
import { Minus, Plus } from "iconoir-react"
import { useState } from "react"
import { sourceCode, usageCode } from "./codeSamples"
import Card from "@/lib/Card"
import Body from "@/components/ui/text/Body"

const SwitchPage = () => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <div>
      <Display className="mb-4">Switch</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Switch включает или выключает состояние отдельного элемента. Подробнее
          на{" "}
          <InlineLink href="https://m3.material.io/components/switch/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <div className="flex items-center justify-between max-w-[400px]">
          <Label size="large" className="mt-3 mb-2">
            Без иконок
          </Label>
          <Switch
            selected={isSelected}
            onChange={() => setIsSelected(!isSelected)}
          />
        </div>

        <div className="flex items-center justify-between max-w-[400px]">
          <Label size="large" className="mt-3 mb-2">
            С иконкой в состоянии selected
          </Label>
          <Switch
            selected={isSelected}
            onChange={() => setIsSelected(!isSelected)}
            icon={<Plus />}
          />
        </div>

        <div className="flex items-center justify-between max-w-[400px]">
          <Label size="large" className="mt-3 mb-2">
            С иконками в обоих состояниях
          </Label>
          <Switch
            selected={isSelected}
            onChange={() => setIsSelected(!isSelected)}
            icon={<Plus />}
            unselectedIcon={<Minus />}
          />
        </div>

        <Heading>Компонент</Heading>
        <Card
          appearance="outlined"
          className="w-fit my-4 bg-yellow-200 bg-opacity-20 border-yellow-400 dark:bg-yellow-300 dark:bg-opacity-50 dark:border-yellow-100"
        >
          <Body>
            Данный компонент будет переделан в будущем под{" "}
            <InlineLink href="https://www.radix-ui.com/docs/primitives/components/switch">
              @radix-ui/react-switch
            </InlineLink>
            .
          </Body>
        </Card>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/components/ui/Switch.tsx</InlineCode>.
        </Paragraph>
        <Code language="tsx" code={sourceCode} />

        <Heading>Использование</Heading>

        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Code language="tsx" code={usageCode} />
      </div>
    </div>
  )
}

export default SwitchPage
