import Code from "@/components/Code"
import Heading from "@/components/Heading"
import ImageWithText from "@/components/ImageWithText"
import InlineCode from "@/components/InlineCode"
import Paragraph from "@/components/Paragraph"
import Body from "@/components/ui/text/Body"
import Display from "@/components/ui/text/Display"
import Headline from "@/components/ui/text/Headline"
import Card from "@/lib/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/Tabs"
import expressiveTypefacePic from "@/public/typography/headline/expressive_typeface.png"
import headlineDialogPic from "@/public/typography/headline/headline_dialog.png"
import shortTextPic from "@/public/typography/headline/short_text.png"

const HeadlinePage = () => {
  return (
    <div>
      <Display className="mb-4">Headline роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Headline лучше всего подходят для коротких, четких текстов на
          небольших экранах. Эти стили могут быть полезны для маркировки
          основных фрагментов текста или важных областей содержимого.
        </Paragraph>
        <Paragraph>
          В headlines также можно использовать выразительные шрифты при условии,
          что соответствующие высота строки и межбуквенный интервал также
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
        <Paragraph>Скопируйте и вставьте код в свой проект:</Paragraph>
        <Code
          language="tsx"
          code={`import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"
import { FC, HTMLAttributes } from "react"
import { cn } from "@/utils/classNames"

const headlineVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-[32px] leading-10",
      medium: "text-[28px] leading-9",
      small: "text-2xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface Props
  extends VariantProps<typeof headlineVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Headline: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <h2 className={cn(headlineVariants({ size }), className)} {...props}>
      {children}
    </h2>
  )
}

export default Headline`}
        />
        <Paragraph>
          Всё аналогично компоненту <InlineCode>Display</InlineCode>. Можно
          сохранить компонент в файл{" "}
          <InlineCode>src/components/typography/Headline.tsx</InlineCode>
        </Paragraph>
        <Heading>Использование</Heading>
        <Code
          language="tsx"
          code={`import Headline from "@/components/typography/Headline"`}
        />
        <Code
          language="tsx"
          code={`{/* Большой */}
<Headline size="large">Headline large</Headline>
{/* Средний */}
<Headline size="medium">Headline medium</Headline>
{/* или без указания size (medium по умолчанию) */}
<Headline>Headline medium</Headline>
{/* Маленький */}
<Headline size="small">Headline small</Headline>`}
        />
        <Heading>Кастомайзинг</Heading>
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
            <Code
              language="tsx"
              code={`<Headline
  className="text-rose-400 dark:text-rose-400 tracking-widest"
>
  Розовый текст с увеличенным letter-spacing
</Headline>
<Headline>Просто обычный текст</Headline>`}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default HeadlinePage
