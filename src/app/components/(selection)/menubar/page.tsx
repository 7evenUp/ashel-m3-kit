import fs from "fs"
import path from "path"

import Display from "@/shared/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import InstallPackage from "@/components/InstallPackage"
import { MenubarExample } from "@/components/MenubarExample"

import { usageSimpleCode } from "./codeSamples"

const MenusPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Menubar.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Menubar</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
          Визуально постоянное меню, распространенное в настольных приложениях и
          обеспечивающее быстрый доступ к последовательному набору команд.
        </Paragraph>

        <Paragraph>
          Компонент используется только для настольных приложений, поэтому
          он использует уменьшенные размеры, нежели в компоненте{" "}
          <InternalLink href="/components/menus">Menu</InternalLink>.
        </Paragraph>

        <Heading>Примеры</Heading>
        <div className="flex items-center gap-6">
          <MenubarExample />
        </div>

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/Menubar.tsx</InlineCode>. Обратите внимание
          на необходимые зависимости:{" "}
          <InternalLink href="/typography/label">Label</InternalLink>.
        </Paragraph>
        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineLink href="https://www.radix-ui.com/primitives/docs/components/menubar">
            @radix-ui/react-menubar
          </InlineLink>{" "}
          компонент.
        </Paragraph>

        <InstallPackage packageName="@radix-ui/react-menubar" />
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>Данный файл экспортирует 16 компонентов</Paragraph>
        <Paragraph>
          <InlineCode>Menubar</InlineCode> - root компонент, содержащий стейт о
          том, какой MenubarMenu сейчас открыт
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarMenu</InlineCode> - компонент, содержащий все части
          MenubarContent
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarTrigger</InlineCode> - кнопка, открывающая одно из
          MenubarMenu
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarPortal</InlineCode> - когда используется, вставляет
          MenubarContent в тег body. В ином случае MenubarContent будет
          вставляться в MenubarMenu
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarContent</InlineCode> - контейнер, содержащий все
          элементы Menu
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarItem</InlineCode> - кнопка в Menu; может быть
          текстом в конце (MenubarShortcut)
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarCheckboxItem</InlineCode> - кнопка в Menu с
          функционалом чекбокса; может быть текстом в конце (MenubarShortcut)
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarRadioGroup</InlineCode> - обёртка для хранения
          состояния радио-кнопок MenubarRadioItem
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarRadioItem</InlineCode> - кнопка в Menu с
          функционалом радио-кнопки; может быть текстом в конце
          (MenubarShortcut)
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarSeparator</InlineCode> - разделитель Menu на
          логические блоки
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarLabel</InlineCode> - текст, который несёт только
          информативную часть (не является кнопкой)
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarSub</InlineCode> - аналог MenubarMenu, но для
          вторичного Menu
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarSubContent</InlineCode> - аналог MenubarContent, но
          для вторичного Menu
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarSubTrigger</InlineCode> - кнопка, активирующая
          вторичное Menu
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarShortcut</InlineCode> - текст в конце кнопок
          MenubarItem, MenubarCheckboxItem и MenubarRadioItem
        </Paragraph>
        <Paragraph>
          <InlineCode>MenubarGroup</InlineCode> - используется для группировки
          нескольких MenubarItem, MenubarCheckboxItem и MenubarRadioItem
        </Paragraph>

        <Heading>Примеры</Heading>

        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>

        <Code language="tsx" code={usageSimpleCode} />
      </div>
    </div>
  )
}

export default MenusPage
