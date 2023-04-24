import Display from "@/components/ui/text/Display"
import Body from "@/components/ui/text/Body"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import ImageWithText from "@/components/ImageWithText"
import InlineCode from "@/components/InlineCode"
import Code from "@/components/Code"

import Card from "@/lib/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/Tabs"

import expressiveTypefacePic from "@/public/typography/display/expressive_typeface.png"
import eyeCatchingDesignPic from "@/public/typography/display/eye_catching_design.png"

import { custom, displaySrc, usage } from "./codeSamples"

const DisplayPage = () => {
  return (
    <div>
      <Display className="mb-4">Display роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          По умолчанию у роли Display есть три стиля отображения: large, medium
          и small. Будучи самым крупным текстом на экране, роль Display
          зарезервирована для краткого и важного текста или цифр. Лучше всего
          использовать эту роль на больших экранах.
        </Paragraph>
        <div className="flex gap-5">
          <ImageWithText
            src={expressiveTypefacePic}
            alt="Expressive typeface used for display styles"
            width={400}
          >
            Для текста роли Display можно рассмотреть выбор более выразительного
            шрифта, например рукописного.
          </ImageWithText>

          <ImageWithText
            alt="Expressive typeface used for eye-catching design"
            src={eyeCatchingDesignPic}
            width={400}
          >
            Выразительный шрифт может привлечь внимание читателей
            привлекательным дизайном.
          </ImageWithText>
        </div>

        <Heading>Примеры</Heading>
        <Card appearance="outlined" className="w-fit grid grid-cols-2 gap-6">
          <Display size="large">Display large</Display>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 57px</Body>
            <Body>line-height: 64px</Body>
            <Body>letter-spacing: -0.25px</Body>
          </div>
          <Display size="medium">Display medium</Display>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 45px</Body>
            <Body>line-height: 52px</Body>
          </div>
          <Display size="small">Display small</Display>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 36px</Body>
            <Body>line-height: 44px</Body>
          </div>
        </Card>

        <Heading>Компонент</Heading>
        <Paragraph>Скопируйте и вставьте код в свой проект.</Paragraph>
        <Paragraph>
          Можно сохранить компонент в файл{" "}
          <InlineCode>src/components/typography/Display.tsx</InlineCode>:
        </Paragraph>
        <Code language="tsx" code={displaySrc} />
        <Paragraph>
          По умолчанию заголовок среднего размера и наследует цвет от родителя.
          В любом случае можете изменять компонент под себя.
        </Paragraph>
        <Heading>Использование</Heading>
        <Code language="tsx" code={usage} />
        <Heading>Кастомайзинг</Heading>
        <Paragraph>
          Наверняка придётся менять стили, цвет, накладывать hover эффекты. В
          этом случае просто используйте <InlineCode>className</InlineCode>.
          Ниже пример зелёного текста, шириной 250 пикселей
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
            <Display
              size="small"
              className="text-green-400 dark:text-green-400 w-[250px]"
            >
              Зелёный текст шириной 250 пикселей
            </Display>
            <Display size="small">Просто обычный текст</Display>
          </TabsContent>
          <TabsContent value="code" className="p-0">
            <Code language="tsx" code={custom} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default DisplayPage
