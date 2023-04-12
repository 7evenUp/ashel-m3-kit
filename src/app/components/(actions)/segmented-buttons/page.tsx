"use client"

import Code from "@/components/Code"
import Heading from "@/components/Heading"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import Paragraph from "@/components/Paragraph"
import Subheading from "@/components/Subheading"
import Body from "@/components/ui/text/Body"
import Display from "@/components/ui/text/Display"
import { SegmentedButton, SegmentedRoot } from "@/lib/SegmentedButton"
import { useEffect, useState } from "react"
import { sourceCode, usageCodeMultiple, usageCodeSingle } from "./codeSamples"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/Tabs"

type currencies = "usd" | "try" | "cny"

const RUB_TO_CURRENCIES = {
  usd: 0.013,
  try: 0.25,
  cny: 0.089,
}

const SYMBOL_TO_CURRENCIES = {
  usd: "$",
  try: "₺",
  cny: "¥",
}

const SegmentedButtonsPage = () => {
  const [result, setResult] = useState(0)
  const [currency, setCurrency] = useState<currencies>("usd")

  useEffect(() => {
    setResult(1000 * RUB_TO_CURRENCIES[currency])
  }, [currency])

  return (
    <div>
      <Display className="mb-4">Segmented Buttons</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Segmented buttons помогают пользователям выбирать параметры,
          переключать виды или сортировать элементы. Подробная информация на{" "}
          <InlineLink href="https://m3.material.io/components/segmented-buttons/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Paragraph>
          Если кратко, есть два вида данных кнопок:{" "}
          <InlineCode>Single-select</InlineCode> и{" "}
          <InlineCode>Multi-select</InlineCode>.
        </Paragraph>

        <Paragraph>
          Первый используется для выбора одной опции, в частности когда
          требуется переключить отображение (grid - rows), при сортировке.
        </Paragraph>
        <Paragraph>
          Второй вариант пригодится для выбора нескольких опций: при фильтрации
          и похожих задачах.
        </Paragraph>

        <Heading>Примеры</Heading>
        <Subheading>Single-select</Subheading>
        <SegmentedRoot
          className="w-[500px]"
          type="single"
          value={currency}
          onValueChange={(value: currencies) => value && setCurrency(value)}
        >
          <SegmentedButton
            name="currency"
            value="try"
          >
            Лира
          </SegmentedButton>
          <SegmentedButton
            name="currency"
            value="usd"
          >
            Доллары
          </SegmentedButton>
          <SegmentedButton
            name="currency"
            value="cny"
          >
            Юань
          </SegmentedButton>
        </SegmentedRoot>

        <Body className="w-[500px] text-center">
          1000 рублей = {result}
          {SYMBOL_TO_CURRENCIES[currency]}
        </Body>

        <Subheading>Multi-select</Subheading>

        <SegmentedRoot
          className="w-[500px]"
          type="multiple"
          defaultValue={["english", "german"]}
        >
          <SegmentedButton id="english" name="language" value="english">
            Английский
          </SegmentedButton>
          <SegmentedButton id="spanish" name="language" value="spanish">
            Испанский
          </SegmentedButton>
          <SegmentedButton id="german" name="language" value="german">
            Немецкий
          </SegmentedButton>
          <SegmentedButton id="french" name="language" value="french">
            Французский
          </SegmentedButton>
        </SegmentedRoot>

        <Heading>Компонент</Heading>
        <Paragraph>Скопируйте и вставьте код в свой проект.</Paragraph>
        <Paragraph>
          Обратите внимание, что компонент имеет зависимости таких компонентов
          как <InlineCode>Label</InlineCode> и{" "}
          <InlineCode>UIStateLayer</InlineCode>. Если вы еще не добавили их в
          свой проект, следует заняться сперва ими.
        </Paragraph>
        <Paragraph>
          Также необходимо установить зависимость{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/toggle">
            @radix-ui/react-toggle-group
          </InlineLink>
        </Paragraph>
        <Code language="bash" code="yarn add @radix-ui/react-toggle-group" />
        <Paragraph>
          Можно сохранить компонент в файл{" "}
          <InlineCode>src/components/ui/SegmentedButton.tsx</InlineCode>:
        </Paragraph>
        <Code language="tsx" code={sourceCode} />

        <Heading>Использование</Heading>
        <Paragraph>Обратите внимание, файл экспортирует два компонента: <InlineCode>SegmentedRoot</InlineCode> и <InlineCode>SegmentedButton</InlineCode>.</Paragraph>
        <Paragraph>Первый служит в качестве контейнера, второй - в качестве самой кнопки.</Paragraph>
        <Tabs defaultValue="single" className="w-[600px]">
          <TabsList>
            <TabsTrigger value="single">Single-select</TabsTrigger>
            <TabsTrigger value="multi">Multi-select</TabsTrigger>
          </TabsList>
          <TabsContent value="single" className="p-0">
            <Code language="tsx" code={usageCodeSingle} />
          </TabsContent>
          <TabsContent value="multi" className="p-0">
            <Code language="tsx" code={usageCodeMultiple} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default SegmentedButtonsPage
