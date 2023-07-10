import fs from "fs"
import path from "path"

import Display from "@/shared/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import FormFilledExample from "@/components/FormFilledExample"
import FormOutlinedExample from "@/components/FormOutlinedExample"

export const metadata = {
  title: "Ashel UI Kit | Forms guide",
  description:
    "Руководство о том, как пользоваться Ashel UI Kit для построения HTML форм",
}

const Forms = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Form.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <main className="p-10 flex flex-col gap-3">
      <Display>React Hook Form + Ashel UI Kit</Display>
      <Paragraph>
        Сегодня разберёмся с вами как строить правильные, удобные,
        типизированные, с валидацией и самое главное - красивые HTML формы.
      </Paragraph>

      <Heading>Примеры</Heading>
      <Paragraph>
        Первый пример показывает форму с использованием{" "}
        <InternalLink href="/components/filled-text-field">
          FilledTextInput
        </InternalLink>
        .
      </Paragraph>

      <FormFilledExample />

      <Paragraph>
        Первый пример показывает форму с использованием{" "}
        <InternalLink href="/components/outlined-text-field">
          OutlinedTextInput
        </InternalLink>
        .
      </Paragraph>

      <FormOutlinedExample />

      <Heading>Компонент</Heading>
      <Paragraph>Скопируйте и вставьте код в свой проект.</Paragraph>
      <Paragraph>
        Обратите внимание, что компонент имеет зависимости таких компонентов как{" "}
        <InternalLink href="/components/filled-text-field">
          FilledTextField
        </InternalLink>{" "}
        и{" "}
        <InternalLink href="/components/filled-text-field">
          OutlinedTextField
        </InternalLink>
        .
      </Paragraph>
      <Paragraph>
        Можно сохранить компонент в файл{" "}
        <InlineCode>src/components/ui/Form.tsx</InlineCode>:
      </Paragraph>
      <Code language="tsx" code={componentCode} />
    </main>
  )
}

export default Forms
