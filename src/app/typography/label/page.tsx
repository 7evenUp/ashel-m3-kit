import Code from "@/components/Code"
import Heading from "@/components/Heading"
import ImageWithText from "@/components/ImageWithText"
import InlineCode from "@/components/InlineCode"
import Paragraph from "@/components/Paragraph"
import Body from "@/components/ui/text/Body"
import Display from "@/components/ui/text/Display"
import Label from "@/components/ui/text/Label"
import Card from "@/lib/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/Tabs"
import musicPlayerPic from "@/public/typography/label/music_player.png"
import navigationBarPic from "@/public/typography/label/navigation_bar.png"
import quickReadingPic from "@/public/typography/label/quick_reading.png"

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
        <Code
          language="tsx"
          code={`import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"
import { FC, HTMLAttributes } from "react"
import { cn } from "@/utils/classNames"

const labelVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-sm tracking-[0.1px] font-medium",
      medium: "text-xs tracking-[0.5px] font-medium",
      small: "text-[11px] leading-4 tracking-[0.5px] font-medium",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface Props
  extends VariantProps<typeof labelVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Label: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <span className={cn(labelVariants({ size }), className)} {...props}>
      {children}
    </span>
  )
}

export default Label`}
        />
        <Heading>Использование</Heading>
        <Code
          language="tsx"
          code={`import Label from "@/components/typography/Label"`}
        />
        <Code
          language="tsx"
          code={`{/* Большой */}
<Label size="large">Label large</Label>
{/* Средний */}
<Label size="medium">Label medium</Label>
{/* или без указания size (medium по умолчанию) */}
<Label>Label medium</Label>
{/* Маленький */}
<Label size="small">Label small</Label>`}
        />
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
            <Code
              language="tsx"
              code={`<Label className="text-red-400 dark:text-red-400">
  (R)ed
</Label>
<Label className="text-green-400 dark:text-green-400">
  (G)reen
</Label>
<Label className="text-blue-400 dark:text-blue-400">
  (B)lue
</Label>`}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default LabelPage
