import Display from "@/shared/typography/Display"
import Title from "@/shared/typography/Title"
import Body from "@/shared/typography/Body"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import ImageWithText from "@/components/ImageWithText"
import InlineCode from "@/components/InlineCode"
import Code from "@/components/Code"

import Card from "@/shared/ui/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs"

import appBarExamplePic from "@/public/typography/title/app_bar_example.png"
import categoryHeaderExamplePic from "@/public/typography/title/category_header_example.png"
import newsExamplePic from "@/public/typography/title/news_example.png"

import { custom, titleSrc, usage } from "./codeSamples"

const TitlePage = () => {
  return (
    <div>
      <Display className="mb-4">Title роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Title роль меньше, чем headline, и её следует использовать для текста
          со средним акцентом, который остается относительно коротким. Например,
          рассмотрите возможность использования данного компонента для
          разделения второстепенных отрывков текста или второстепенных областей
          содержимого.
        </Paragraph>
        <Paragraph>
          Для title соблюдайте осторожность при использовании выразительных
          шрифтов, включая печатные и рукописные стили.
        </Paragraph>
        <ImageWithText
          alt="A news article title using the title style to capture attention"
          src={newsExamplePic}
          width={400}
        >
          Новостной пост, использующий title для захвата внимания.
        </ImageWithText>

        <div className="flex gap-5">
          <ImageWithText
            alt="Top app bar using title style"
            src={appBarExamplePic}
            width={400}
          >
            Top App Bar, использующий title.
          </ImageWithText>
          <ImageWithText
            alt="Example of title style applied to a category header: Top News"
            src={categoryHeaderExamplePic}
            width={400}
          >
            Пример title, применённого к заголовку категории: Top News.
          </ImageWithText>
        </div>

        <Heading>Примеры</Heading>
        <Card appearance="outlined" className="w-fit grid grid-cols-2 gap-6">
          <Title size="large">Title large</Title>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 22px</Body>
            <Body>line-height: 28px</Body>
          </div>

          <Title size="medium">Title medium</Title>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 16px</Body>
            <Body>line-height: 24px</Body>
            <Body>letter-spacing: 0.15px</Body>
            <Body>font-weight: 500</Body>
          </div>
          <Title size="small">Title small</Title>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 14px</Body>
            <Body>line-height: 20px</Body>
            <Body>letter-spacing: 0.1px</Body>
            <Body>font-weight: 500</Body>
          </div>
        </Card>

        <Heading>Компонент</Heading>
        <Paragraph>Скопируйте и вставьте код в свой проект.</Paragraph>
        <Paragraph>
          Можно сохранить компонент в файл{" "}
          <InlineCode>src/components/typography/Title.tsx</InlineCode>:
        </Paragraph>
        <Code language="tsx" code={titleSrc} />
        <Heading>Использование</Heading>
        <Code language="tsx" code={usage} />
        <Heading>Кастомайзинг</Heading>
        <Paragraph>Ниже пример текста с низким значением line-height</Paragraph>
        <Tabs className="w-[600px]" defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Пример</TabsTrigger>
            <TabsTrigger value="code">Код</TabsTrigger>
          </TabsList>
          <TabsContent
            value="preview"
            className="border border-light-outlineVariant dark:border-dark-outlineVariant rounded-md mt-1"
          >
            <Title size="large" className="leading-5 w-[200px]">
              Текст с очень низким line-height
            </Title>
            <Title size="large" className="w-[200px] mt-2">
              Текст со стандартным line-height
            </Title>
          </TabsContent>
          <TabsContent value="code" className="p-0">
            <Code language="tsx" code={custom} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default TitlePage
