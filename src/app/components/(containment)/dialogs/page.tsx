import fs from "fs"
import path from "path"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"

import Display from "@/shared/typography/Display"
import Button from "@/shared/ui/Button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogActionButtonContainer,
  DialogActionButton,
} from "@/shared/ui/Dialog"

import { usageCode } from "./codeSamples"

const DialogPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Dialog.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Dialog</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Dialogs могут требовать выполнения действия, передавать информацию или
          помогать пользователям выполнить задачу.
        </Paragraph>
        <Paragraph>
          Подробнее об использовании элемента читайте на{" "}
          <InlineLink href="https://m3.material.io/components/dialogs/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <Dialog>
          <DialogTrigger asChild>
            <Button appearance={"tonal"}>Открыть Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Body description.</DialogDescription>
            {/* Your other content goes here */}
            <DialogActionButtonContainer>
              <DialogActionButton>Close</DialogActionButton>
              <DialogActionButton>Save changes</DialogActionButton>
            </DialogActionButtonContainer>
          </DialogContent>
        </Dialog>

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/shared/ui/Dialog.tsx</InlineCode>. Обратите
          внимание на необходимые зависимости:{" "}
          <InternalLink href="/typography/headline">Headline</InternalLink>,{" "}
          <InternalLink href="/typography/body">Body</InternalLink> и{" "}
          <InternalLink href="/components/common-buttons">Button</InternalLink>.
        </Paragraph>
        <Paragraph>
          Так же данный компонент использует{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/dialog">
            @radix-ui/react-dialog
          </InlineLink>{" "}
          компонент.
        </Paragraph>
        <Code language="bash" code={"yarn add @radix-ui/react-dialog"} />
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>Данный файл экспортирует 7 компонентов</Paragraph>
        <Paragraph>
          <InlineCode>Dialog</InlineCode> - компонент, содержащий стейт о том,
          открыт сейчас dialog или нет
        </Paragraph>
        <Paragraph>
          <InlineCode>DialogTrigger</InlineCode> - кнопка, открывающая dialog
        </Paragraph>
        <Paragraph>
          <InlineCode>DialogTitle</InlineCode> - заголовок, описывающий
          предназначение dialog
        </Paragraph>
        <Paragraph>
          <InlineCode>DialogDescription</InlineCode> - текст, содержащий
          подробное описание происходящего внутри dialog
        </Paragraph>
        <Paragraph>
          <InlineCode>DialogActionButtonContainer</InlineCode> - контейнер для
          кнопок-действий (сохранить, удалить, выйти)
        </Paragraph>
        <Paragraph>
          <InlineCode>DialogActionButton</InlineCode> - кнопка-действие
        </Paragraph>
        <Paragraph>
          <InlineCode>DialogContent</InlineCode> - содержит контент,
          рендерящийся при открытии dialog
        </Paragraph>

        <Paragraph>Ниже - код для примера в начале страницы.</Paragraph>
        <Code language="tsx" code={usageCode} />
      </div>
    </div>
  )
}

export default DialogPage
