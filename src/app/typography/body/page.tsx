import Display from "@/components/typography/Display"
import Body from "@/components/typography/Body"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import ImageWithText from "@/components/ImageWithText"
import InlineCode from "@/components/InlineCode"
import Code from "@/components/Code"

import Card from "@/lib/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/Tabs"

import articlePestoPic from "@/public/typography/body/article_pesto.png"
import readablePassagesPic from "@/public/typography/body/readable_passages.png"
import setupFlowPic from "@/public/typography/body/setup_flow.png"

import { bodySrc, custom, usage } from "./codeSamples"

const BodyPage = () => {
  return (
    <div>
      <Display className="mb-4">Body роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Body роли используются для более длинных отрывков текста в вашем
          приложении.
        </Paragraph>
        <Paragraph>
          Используйте стандартные шрифты, которые читаются при меньших размерах
          и удобны для чтения в более длинных абзацах.
        </Paragraph>
        <Paragraph>
          Избегайте выразительных или декоративных шрифтов для body ролей,
          потому что их может быть труднее читать при маленьком размере.
        </Paragraph>
        <ImageWithText
          alt="Body styles must be readable for long passages"
          src={readablePassagesPic}
          width={400}
        >
          Body должен быть читабельным для длинных отрывков.
        </ImageWithText>

        <div className="flex gap-5">
          <ImageWithText
            alt="Body style used throughout an article about pesto"
            src={articlePestoPic}
            width={400}
          >
            Body, используемый в статье о песто.
          </ImageWithText>
          <ImageWithText
            alt="Example of body style used throughout a setup flow"
            src={setupFlowPic}
            width={400}
          >
            Пример body, используемого в процессе настройки.
          </ImageWithText>
        </div>

        <Heading>Примеры</Heading>
        <Card appearance="outlined" className="w-fit grid grid-cols-2 gap-6">
          <Body size="large">Body large</Body>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 16px</Body>
            <Body>line-height: 24px</Body>
            <Body>letter-spacing: 0.5px</Body>
          </div>

          <Body size="medium">Body medium</Body>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 14px</Body>
            <Body>line-height: 20px</Body>
            <Body>letter-spacing: 0.25px</Body>
          </div>
          <Body size="small">Body small</Body>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 12px</Body>
            <Body>line-height: 16px</Body>
            <Body>letter-spacing: 0.4px</Body>
          </div>
        </Card>

        <Heading>Компонент</Heading>
        <Paragraph>Скопируйте и вставьте код в свой проект.</Paragraph>
        <Paragraph>
          Можно сохранить компонент в файл{" "}
          <InlineCode>src/components/typography/Body.tsx</InlineCode>:
        </Paragraph>
        <Code language="tsx" code={bodySrc} />
        <Heading>Использование</Heading>
        <Code language="tsx" code={usage} />
        <Heading>Кастомайзинг</Heading>
        <Paragraph>
          Не зацикливайтесь на фиксированных размерах компонентов. Можете
          изменять размер шрифта и прочие базовые css стили под себя. Ниже
          пример короткого текста размером 18px.
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
            <Body size="large" className="text-lg w-[150px]">
              Короткий текст размером 18px
            </Body>
            <Body size="large">Стандартный текст</Body>
          </TabsContent>
          <TabsContent value="code" className="p-0">
            <Code language="tsx" code={custom} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default BodyPage
