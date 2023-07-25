import fs from "fs"
import path from "path"

import Display from "@/shared/typography/Display"
import Headline from "@/shared/typography/Headline"
import Body from "@/shared/typography/Body"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import ImageWithText from "@/components/ImageWithText"
import InlineCode from "@/components/InlineCode"
import Code from "@/components/Code"

import Card from "@/shared/ui/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs"

import expressiveTypefacePic from "@/public/typography/headline/expressive_typeface.png"
import headlineDialogPic from "@/public/typography/headline/headline_dialog.png"
import shortTextPic from "@/public/typography/headline/short_text.png"

import { custom, usage } from "./codeSamples"

const HeadlinePage = () => {
  const headlineFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "typography",
    "Headline.tsx"
  )
  const headlineCode = fs.readFileSync(headlineFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Headline роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Headline роль лучше всего подходят для коротких, четких текстов на
          небольших экранах. Этот компонент может быть полезен для маркировки
          основных фрагментов текста или важных областей содержимого.
        </Paragraph>
        <Paragraph>
          В ролях headline также можно использовать выразительные шрифты при
          условии, что соответствующие line-height и letter-spasing также
          интегрированы для обеспечения удобочитаемости.
        </Paragraph>
        <ImageWithText
          alt="Expressive typeface used for eye-catching design"
          src={expressiveTypefacePic}
          width={400}
        >
          Выразительный шрифт так же можно использовать для headline, как и для
          display.
        </ImageWithText>

        <div className="flex gap-5">
          <ImageWithText
            alt="Headline style used for short text on a small screen"
            src={shortTextPic}
            width={400}
          >
            Выразительный шрифт так же можно использовать для headline, как и
            для display.
          </ImageWithText>
          <ImageWithText
            alt="Dialog using a headline style"
            src={headlineDialogPic}
            width={400}
          >
            Dialog, использующий headline.
          </ImageWithText>
        </div>

        <Heading>Примеры</Heading>
        <Card appearance="outlined" className="w-fit grid grid-cols-2 gap-6">
          <Headline size="large">Headline large</Headline>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 32px</Body>
            <Body>line-height: 40px</Body>
          </div>
          <Headline size="medium">Headline medium</Headline>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 28px</Body>
            <Body>line-height: 36px</Body>
          </div>
          <Headline size="small">Headline small</Headline>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 24px</Body>
            <Body>line-height: 32px</Body>
          </div>
        </Card>

        <Heading>Компонент</Heading>
        <Paragraph>Скопируйте и вставьте код в свой проект.</Paragraph>
        <Paragraph>
          Можно сохранить компонент в файл{" "}
          <InlineCode>src/shared/typography/Headline.tsx</InlineCode>:
        </Paragraph>
        <Code language="tsx" code={headlineCode} />
        <Paragraph>
          Всё аналогично компоненту <InlineCode>Display</InlineCode>.
        </Paragraph>
        <Heading>Использование</Heading>
        <Code language="tsx" code={usage} />
        <Heading>Кастомизация</Heading>
        <Paragraph>
          Кастомизируется так же, как и <InlineCode>Display</InlineCode>. Ниже
          пример розового текста с увеличенным letter-spacing.
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
            <Headline className="text-rose-400 dark:text-rose-400 tracking-widest">
              Розовый текст с увеличенным letter-spacing
            </Headline>
            <Headline>Просто обычный текст</Headline>
          </TabsContent>
          <TabsContent value="code" className="p-0">
            <Code language="tsx" code={custom} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default HeadlinePage
