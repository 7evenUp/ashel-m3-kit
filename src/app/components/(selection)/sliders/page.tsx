import fs from "fs"
import path from "path"

import Display from "@/shared/typography/Display"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InternalLink from "@/components/InternalLink"
import InlineLink from "@/components/InlineLink"
import SliderExample from "@/components/SliderExample"

import { usageOneHandleCode, usageTwoHandlesCode } from "./codeSamples"

const SlidersPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Slider.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Sliders</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Sliders позволяют пользователям выбирать из диапазона значений.
        </Paragraph>

        <Paragraph>
          Подробнее об использовании элемента читайте на{" "}
          <InlineLink href="https://m3.material.io/components/sliders/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <SliderExample />

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/Slider.tsx</InlineCode>. Обратите внимание
          на необходимые зависимости:{" "}
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
        <Code language="bash" code={"yarn add @radix-ui/react-slider"} />
        <Code language="tsx" code={componentCode} />

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

export default SlidersPage
