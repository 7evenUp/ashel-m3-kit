import Display from "@/shared/typography/Display"
import Headline from "@/shared/typography/Headline"
import Body from "@/shared/typography/Body"

import Heading from "@/components/Heading"
import Subheading from "@/components/Subheading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"

import Button from "@/shared/ui/Button"
import Card from "@/shared/ui/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs"

import { customCode, sourceCode, usageCode } from "./codeSamples"

const CardsPage = () => {
  return (
    <div>
      <Display className="mb-4">Cards</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Cards содержат контент и действия, относящиеся к одному предмету
        </Paragraph>

        <Heading>Примеры</Heading>
        <div className="flex flex-col gap-6">
          <div>
            <Subheading>Elevated</Subheading>
            <div className="flex gap-2">
              <Card
                appearance={"elevated"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Обуздай хаос</Headline>
                <Body className="max-w-[200px]">
                  С помощью быстрого искусственного интеллекта
                </Body>
                <Button appearance={"tonal"} className="mt-auto self-end">
                  Подробнее
                </Button>
              </Card>
              <Card
                appearance={"elevated"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Стань художником</Headline>
                <Body className="max-w-[200px]">
                  Хватит быть потребителем - пора стать дизайнером своей жизни!
                </Body>
                <Button appearance={"tonal"} className="mt-auto self-end">
                  Быть, а не казаться
                </Button>
              </Card>
            </div>
          </div>

          <div>
            <Subheading>Filled</Subheading>
            <div className="flex gap-2">
              <Card
                appearance={"filled"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Обуздай хаос</Headline>
                <Body className="max-w-[200px]">
                  С помощью быстрого искусственного интеллекта
                </Body>
                <Button appearance={"filled"} className="mt-auto self-end">
                  Подробнее
                </Button>
              </Card>
              <Card
                appearance={"filled"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Стань художником</Headline>
                <Body className="max-w-[200px]">
                  Хватит быть потребителем - пора стать дизайнером своей жизни!
                </Body>
                <Button appearance={"filled"} className="mt-auto self-end">
                  Быть, а не казаться
                </Button>
              </Card>
            </div>
          </div>

          <div>
            <Subheading>Outlined</Subheading>
            <div className="flex gap-2">
              <Card
                appearance={"outlined"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Обуздай хаос</Headline>
                <Body className="max-w-[200px]">
                  С помощью быстрого искусственного интеллекта
                </Body>
                <Button appearance={"tonal"} className="mt-auto self-end">
                  Подробнее
                </Button>
              </Card>
              <Card
                appearance={"outlined"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Стань художником</Headline>
                <Body className="max-w-[200px]">
                  Хватит быть потребителем - пора стать дизайнером своей жизни!
                </Body>
                <Button appearance={"tonal"} className="mt-auto self-end">
                  Быть, а не казаться
                </Button>
              </Card>
            </div>
          </div>
        </div>

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/components/ui/Card.tsx</InlineCode>.
        </Paragraph>
        <Code language="tsx" code={sourceCode} />

        <Heading>Использование</Heading>
        <Paragraph>Ниже - пример всех вариантов компонента Card.</Paragraph>
        <Code language="tsx" code={usageCode} />

        <Heading>Кастомизация</Heading>
        <Paragraph>
          Вы не привязаны исключительно к предоставленным стилям компонента
          Card. Можно спокойно изменять компонент под себя.
        </Paragraph>
        <Tabs defaultValue="preview" className="w-[600px]">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent
            value="preview"
            className="border border-light-outlineVariant dark:border-dark-outlineVariant rounded-md mt-1 data-[state=active]:flex justify-center"
          >
            <Card
              appearance="outlined"
              className="w-fit my-4 bg-yellow-200 bg-opacity-20 border-yellow-400 dark:bg-yellow-200 dark:bg-opacity-80 dark:border-yellow-100 dark:text-dark-inverseOnSurface"
            >
              <Body>Данный компонент имеет фон и обводку жёлтого цвета</Body>
            </Card>
          </TabsContent>
          <TabsContent value="code" className="p-0">
            <Code language="tsx" code={customCode} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default CardsPage
