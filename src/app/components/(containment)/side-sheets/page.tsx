import fs from "fs"
import path from "path"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import InstallPackage from "@/components/InstallPackage"

import Display from "@/shared/typography/Display"
import Body from "@/shared/typography/Body"

import Button from "@/shared/ui/Button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/SideSheet"

import { usageCode } from "./codeSamples"

const DialogPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "SideSheet.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Side Sheets</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Side Sheets отображают дополнительный контент, прикрепленный к боковой
          части экрана.
        </Paragraph>
        <Paragraph>
          Подробнее об использовании элемента читайте на{" "}
          <InlineLink href="https://m3.material.io/components/side-sheets/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <Sheet>
          <SheetTrigger asChild>
            <Button appearance="filled">Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Заголовок</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col px-6">
              <Body className="text-light-onSurface dark:text-dark-onSurface">
                Ваш контент будет находиться здесь
              </Body>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button appearance="filled">Сохранить</Button>
              </SheetClose>
              <SheetClose asChild>
                <Button appearance="outlined">Отменить</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/SideSheet.tsx</InlineCode>. Обратите
          внимание на необходимые зависимости:{" "}
          <InternalLink href="/typography/title">Title</InternalLink>.
        </Paragraph>
        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/dialog">
            @radix-ui/react-dialog
          </InlineLink>{" "}
          компонент.
        </Paragraph>

        <InstallPackage packageName="@radix-ui/react-dialog" />

        <Paragraph>
          Напомню, что в качестве иконок я использую{" "}
          <InlineLink href="https://iconoir.com/">iconoir</InlineLink>
        </Paragraph>

        <InstallPackage packageName="iconoir-react" />

        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>Данный файл экспортирует 7 компонентов</Paragraph>
        <Paragraph>
          <InlineCode>Sheet</InlineCode> - компонент, содержащий стейт о том,
          открыт сейчас dialog или нет
        </Paragraph>
        <Paragraph>
          <InlineCode>SheetTrigger</InlineCode> - кнопка, открывающая dialog
        </Paragraph>
        <Paragraph>
          <InlineCode>SheetHeader</InlineCode> - хедер, содержит в себе
          заголовок и кнопку закрытия
        </Paragraph>
        <Paragraph>
          <InlineCode>SheetTitle</InlineCode> - просто заголовок, помещается
          внутри SheetHeader
        </Paragraph>
        <Paragraph>
          <InlineCode>SheetClose</InlineCode> - компонент, внутрь которого можно
          поместить любой React элемент. Нажатие будет тригерить событие
          закрытия
        </Paragraph>
        <Paragraph>
          <InlineCode>SheetContent</InlineCode> - весь контент будет
          располагаться здесь. Не забудьте добавить padding для компонента:{" "}
          <InlineCode>px-6</InlineCode>
        </Paragraph>
        <Paragraph>
          <InlineCode>SheetFooter</InlineCode> - футер с кнопками. Если необходимо закрывать SideSheet при нажатии на
          кнопки, оборачиваем их в <InlineCode>SheetClose</InlineCode>
        </Paragraph>

        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Code language="tsx" code={usageCode} />
      </div>
    </div>
  )
}

export default DialogPage
