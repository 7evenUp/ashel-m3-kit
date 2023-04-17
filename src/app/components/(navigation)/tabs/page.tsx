import Code from "@/components/Code"
import Heading from "@/components/Heading"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import Paragraph from "@/components/Paragraph"
import Display from "@/components/ui/text/Display"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/Tabs"
import { sourceCode, usageCode } from "./codeSamples"

const TabsPage = () => {
  return (
    <div>
      <Display className="mb-4">Tabs</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
          Tabs полезны для переключения между представлениями отдельных и
          связанных групп информации.
        </Paragraph>

        <Heading>Примеры</Heading>
        <Tabs className="w-[500px]" defaultValue="x">
          <TabsList>
            <TabsTrigger value="x">First</TabsTrigger>
            <TabsTrigger value="y">Second</TabsTrigger>
            <TabsTrigger value="z">Third</TabsTrigger>
          </TabsList>
          <TabsContent value="x">First content</TabsContent>
          <TabsContent value="y">Second content</TabsContent>
          <TabsContent value="z">Third content</TabsContent>
        </Tabs>

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/components/ui/Tabs.tsx</InlineCode>. Обратите внимание
          на необходимые зависимости:{" "}
          <InternalLink href="/typography/title">Title</InternalLink> и{" "}
          <InternalLink href="#">UIStateLayer</InternalLink>.
        </Paragraph>
        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/tabs">
            @radix-ui/react-tabs
          </InlineLink>{" "}
          компонент.
        </Paragraph>
        <Code language="bash" code={"yarn add @radix-ui/react-tabs"} />
        <Code language="tsx" code={sourceCode} />

        <Heading>Использование</Heading>
        <Paragraph>
          Данный файл экспортирует 4 компонента: <InlineCode>Tabs</InlineCode> -
          компонент-обёртка, содержащая весь стейт компонента,{" "}
          <InlineCode>TabsList</InlineCode> - компонент-список, в котором
          располагаются кнопки,{" "}
          <InlineCode>TabsTrigger</InlineCode> - компонент-кнопка, которая
          служит для переключения самих табов,{" "}
          <InlineCode>TabsContent</InlineCode> - компонент, содержащий контент,
          относящийся к определённому табу.
        </Paragraph>
        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Code language="tsx" code={usageCode} />
      </div>
    </div>
  )
}

export default TabsPage
