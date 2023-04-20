import Heading from "@/components/Heading"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import {
  MenuExampleWithButton,
  MenuExampleWithIconButton,
} from "@/components/MenuExamples"
import Paragraph from "@/components/Paragraph"
import Display from "@/components/ui/text/Display"
import { sourceCode, usageSimpleCode, usageSubCode } from "./codeSamples"
import Code from "@/components/Code"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/Tabs"

const MenusPage = () => {
  return (
    <div>
      <Display className="mb-4">Menus</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
          Меню отображают список вариантов на временной поверхности.
        </Paragraph>
        <Paragraph>
          Меню появляется, когда пользователи взаимодействуют с кнопкой,
          действием или другим элементом управления.
        </Paragraph>
        <Paragraph>
          Они могут быть открыты с помощью различных элементов, чаще всего это{" "}
          <InternalLink href="/components/icon-buttons">
            Icon Buttons
          </InternalLink>
          ,{" "}
          <InternalLink href="/components/common-buttons">Buttons</InternalLink>{" "}
          и{" "}
          <InternalLink href="/components/filled-text-field">
            Text Fields
          </InternalLink>
          .
        </Paragraph>

        <Heading>Примеры</Heading>
        <div className="flex items-center gap-6">
          <MenuExampleWithButton />
          <MenuExampleWithIconButton />
        </div>

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/components/ui/Dialog.tsx</InlineCode>. Обратите
          внимание на необходимые зависимости:{" "}
          <InternalLink href="/typography/label">Label</InternalLink>.
        </Paragraph>
        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/dropdown-menu">
            @radix-ui/react-dropdown-menu
          </InlineLink>{" "}
          компонент.
        </Paragraph>
        <Code language="bash" code={"yarn add @radix-ui/react-dropdown-menu"} />
        <Code language="tsx" code={sourceCode} />

        <Heading>Использование</Heading>
        <Paragraph>Данный файл экспортирует 9 компонентов</Paragraph>
        <Paragraph>
          <InlineCode>MenuRoot</InlineCode> - компонент, содержащий стейт о том,
          открыто сейчас Menu или нет
        </Paragraph>
        <Paragraph>
          <InlineCode>MenuTrigger</InlineCode> - кнопка, открывающая Menu
        </Paragraph>
        <Paragraph>
          <InlineCode>MenuPortal</InlineCode> - обёртка для MenuContent
        </Paragraph>
        <Paragraph>
          <InlineCode>MenuContent</InlineCode> - контейнер, содержащий все
          элементы Menu
        </Paragraph>
        <Paragraph>
          <InlineCode>MenuItem</InlineCode> - кнопка в Menu; может быть с
          иконкой вначале (leading), иконкой или текстом в конце (trailing)
        </Paragraph>
        <Paragraph>
          <InlineCode>MenuSeparator</InlineCode> - разделитель для логического
          разбиения Menu на блоки
        </Paragraph>
        <Paragraph>
          <InlineCode>MenuSub</InlineCode> - аналог MenuRoot, но для вторичного
          Menu
        </Paragraph>
        <Paragraph>
          <InlineCode>MenuSubTrigger</InlineCode> - кнопка, активирующая
          вторичное Menu
        </Paragraph>
        <Paragraph>
          <InlineCode>MenuSubContent</InlineCode> - аналог MenuContent, но для
          вторичного Menu
        </Paragraph>

        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Tabs defaultValue="simple" className="w-[600px]">
          <TabsList>
            <TabsTrigger value="simple">Simple</TabsTrigger>
            <TabsTrigger value="with-sub">With sub menu</TabsTrigger>
          </TabsList>
          <TabsContent value="simple" className="p-0">
            <Code language="tsx" code={usageSimpleCode} />
          </TabsContent>
          <TabsContent value="with-sub" className="p-0">
            <Code language="tsx" code={usageSubCode} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default MenusPage
