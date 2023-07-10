import fs from "fs"
import path from "path"
import { DeleteCircle, Search } from "iconoir-react"

import Display from "@/shared/typography/Display"
import OutlinedTextField from "@/shared/ui/OutlinedTextField"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import InlineCode from "@/components/InlineCode"
import Code from "@/components/Code"

import { usageCode } from "./codeSamples"

const OutlinedTextFieldPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "OutlinedTextField.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Outlined text field</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
          Текстовые поля позволяют пользователям вводить текст в
          пользовательский интерфейс. Обычно они отображаются в формах и
          диалоговых окнах.
        </Paragraph>
        <Paragraph>
          Подробнее на{" "}
          <InlineLink href="https://shared.material.io/components/text-fields/overview">
            офицальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <div className="flex flex-col gap-3">
          <OutlinedTextField
            label="With leading icon"
            leadingIcon={<Search />}
            placeholder="This is placeholder"
          />
          <OutlinedTextField
            label="With trailing icon"
            trailingIcon={<DeleteCircle />}
          />
          <OutlinedTextField
            label="With both icons"
            leadingIcon={<Search />}
            trailingIcon={<DeleteCircle />}
          />
          <OutlinedTextField
            label="Error state"
            variant="error"
            trailingIcon={<DeleteCircle />}
            supportingText="This is supporting text"
            supportingTextCharCount="14/10"
          />
        </div>

        <Heading>Компонент</Heading>
        <Paragraph>Скопируйте и вставьте код в свой проект.</Paragraph>
        <Paragraph>
          Обратите внимание, что компонент имеет зависимости такого компонента
          как <InternalLink href="/typography/body">Body</InternalLink>.
        </Paragraph>
        <Paragraph>
          Можно сохранить компонент в файл{" "}
          <InlineCode>src/components/ui/OutlinedTextField.tsx</InlineCode>:
        </Paragraph>
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Paragraph>
          Ниже вы можете посмотреть примеры компонентов в секции
          &quot;Примеры&quot;
        </Paragraph>
        <Code language="tsx" code={usageCode} />

        <Paragraph>
          Пример использования компонентов внутри формы можете посмотреть на{" "}
          <InlineLink href="/guides/forms">здесь</InlineLink>.
        </Paragraph>
      </div>
    </div>
  )
}

export default OutlinedTextFieldPage
