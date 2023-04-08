import Code from "@/components/Code"
import Heading from "@/components/Heading"
import ImageWithText from "@/components/ImageWithText"
import InlineCode from "@/components/InlineCode"
import Paragraph from "@/components/Paragraph"
import Body from "@/components/ui/text/Body"
import Display from "@/components/ui/text/Display"
import Title from "@/components/ui/text/Title"
import Card from "@/lib/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/Tabs"
import appBarExamplePic from "@/public/typography/title/app_bar_example.png"
import categoryHeaderExamplePic from "@/public/typography/title/category_header_example.png"
import newsExamplePic from "@/public/typography/title/news_example.png"

const TitlePage = () => {
  return (
    <div>
      <Display className="mb-4">Title роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Title меньше, чем headline, и их следует использовать для текста со
          средним акцентом, который остается относительно коротким. Например,
          рассмотрите возможность использования стилей заголовков для разделения
          второстепенных отрывков текста или второстепенных областей
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
        <Code
          language="tsx"
          code={`import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"
import { FC, HTMLAttributes } from "react"
import { cn } from "@/utils/classNames"

const titleVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-[22px] leading-7",
      medium: "text-base tracking-[0.15px] font-medium",
      small: "text-sm tracking-[0.1px] font-medium",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface Props
  extends VariantProps<typeof titleVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Title: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <p className={cn(titleVariants({ size }), className)} {...props}>
      {children}
    </p>
  )
}

export default Title`}
        />
        <Heading>Использование</Heading>
        <Code
          language="tsx"
          code={`import Title from "@/components/typography/Title"`}
        />
        <Code
          language="tsx"
          code={`{/* Большой */}
<Title size="large">Title large</Title>
{/* Средний */}
<Title size="medium">Title medium</Title>
{/* или без указания size (medium по умолчанию) */}
<Title>Title medium</Title>
{/* Маленький */}
<Title size="small">Title small</Title>`}
        />
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
            <Code
              language="tsx"
              code={`<Title size="large" className="leading-5 w-[200px]">
  Текст с очень низким line-height
</Title>
<Title size="large" className="w-[200px] mt-2">
  Текст со стандартным line-height
</Title>`}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default TitlePage
