import Display from "@/components/typography/Display"
import Body from "@/components/typography/Body"
import Label from "@/components/typography/Label"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import ImageWithText from "@/components/ImageWithText"
import InlineCode from "@/components/InlineCode"
import Code from "@/components/Code"

import Card from "@/lib/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/Tabs"

import musicPlayerPic from "@/public/typography/label/music_player.png"
import navigationBarPic from "@/public/typography/label/navigation_bar.png"
import quickReadingPic from "@/public/typography/label/quick_reading.png"

import { custom, labelSrc, usage } from "./codeSamples"

const LabelPage = () => {
  return (
    <div>
      <Display className="mb-4">Label роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Label — это маленькая, утилитарная роль, используемая для таких вещей,
          как текст внутри компонентов или для очень маленького текста в
          основной части содержимого, например для подписей.
        </Paragraph>
        <Paragraph>Кнопки, например, используют крупный стиль label.</Paragraph>
        <ImageWithText
          alt="Label styles should enable quick reading at small sizes, such as in buttons"
          src={quickReadingPic}
          width={400}
        >
          Label роль должна обеспечивать быстрое и удобное чтение на небольших
          размерах, например на кнопках.
        </ImageWithText>

        <div className="flex gap-5">
          <ImageWithText
            alt="A music player using label style for the timecode"
            src={musicPlayerPic}
            width={400}
          >
            Музыкальный плеер, использующий label для таймкода
          </ImageWithText>
          <ImageWithText
            alt="A navigation bar using label style for the destination text"
            src={navigationBarPic}
            width={400}
          >
            Navigation Bar использующий label в качестве текста к ссылкам
          </ImageWithText>
        </div>

        <Heading>Примеры</Heading>
        <Card appearance="outlined" className="w-fit grid grid-cols-2 gap-6">
          <Label size="large">Label large</Label>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 14px</Body>
            <Body>line-height: 20px</Body>
            <Body>letter-spacing: 0.1px</Body>
            <Body>font-weight: 500</Body>
          </div>

          <Label size="medium">Label medium</Label>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 12px</Body>
            <Body>line-height: 16px</Body>
            <Body>letter-spacing: 0.5px</Body>
            <Body>font-weight: 500</Body>
          </div>
          <Label size="small">Label small</Label>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 11px</Body>
            <Body>line-height: 16px</Body>
            <Body>letter-spacing: 0.5px</Body>
            <Body>font-weight: 500</Body>
          </div>
        </Card>

        <Heading>Компонент</Heading>
        <Paragraph>Скопируйте и вставьте код в свой проект.</Paragraph>
        <Paragraph>
          Можно сохранить компонент в файл{" "}
          <InlineCode>src/components/typography/Label.tsx</InlineCode>:
        </Paragraph>
        <Code language="tsx" code={labelSrc} />
        <Heading>Использование</Heading>
        <Code language="tsx" code={usage} />
        <Heading>Кастомайзинг</Heading>
        <Paragraph>
          Подходя к Label у меня закончились идеи по кастомизации, поэтому
          ловите набор разноцветных слов.
        </Paragraph>
        <Tabs className="w-[600px]" defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Пример</TabsTrigger>
            <TabsTrigger value="code">Код</TabsTrigger>
          </TabsList>
          <TabsContent
            value="preview"
            className="border border-light-outlineVariant dark:border-dark-outlineVariant rounded-md mt-1"
          >
            <Label className="text-red-400 dark:text-red-400">(R)ed</Label>
            <Label className="text-green-400 dark:text-green-400">
              (G)reen
            </Label>
            <Label className="text-blue-400 dark:text-blue-400">(B)lue</Label>
          </TabsContent>
          <TabsContent value="code" className="p-0">
            <Code language="tsx" code={custom} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default LabelPage
