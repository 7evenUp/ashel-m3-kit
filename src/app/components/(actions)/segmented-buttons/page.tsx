import fs from "fs"
import path from "path"

import Display from "@/shared/typography/Display"

import Heading from "@/components/Heading"
import Subheading from "@/components/Subheading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import SegmentedButtonsWithState from "@/components/SegmentedButtonsWithState"

import { SegmentedButton, SegmentedRoot } from "@/shared/ui/SegmentedButton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs"

import { usageCodeMultiple, usageCodeSingle } from "./codeSamples"

const SegmentedButtonsPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "SegmentedButton.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Segmented Buttons</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Segmented buttons помогают пользователям выбирать параметры,
          переключать виды или сортировать элементы. Подробная информация на{" "}
          <InlineLink href="https://shared.material.io/components/segmented-buttons/overview">
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
        <SegmentedButtonsWithState />

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
          как <InternalLink href="/typography/label">Label</InternalLink> и{" "}
          <InternalLink href="/components/ui-state-layer">
            UIStateLayer
          </InternalLink>
          . Если вы еще не добавили их в свой проект, следует заняться сперва
          ими.
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
          <InlineCode>src/shared/ui/SegmentedButton.tsx</InlineCode>:
        </Paragraph>
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>
          Обратите внимание, файл экспортирует два компонента:{" "}
          <InlineCode>SegmentedRoot</InlineCode> и{" "}
          <InlineCode>SegmentedButton</InlineCode>.
        </Paragraph>
        <Paragraph>
          Первый служит в качестве контейнера, второй - в качестве самой кнопки.
        </Paragraph>
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
