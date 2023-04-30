import Display from "@/components/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import InlineLink from "@/components/InlineLink"

import FilledTextInput from "@/lib/FilledTextInput"
import { DeleteCircle, Search } from "iconoir-react"
import Body from "@/components/typography/Body"

const FilledTextFieldPage = () => {
  return (
    <div>
      <Display className="mb-4">Filled text field</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
          Текстовые поля позволяют пользователям вводить текст в
          пользовательский интерфейс. Обычно они отображаются в формах и
          диалоговых окнах.
        </Paragraph>
        <Paragraph>
          Подробнее на{" "}
          <InlineLink href="https://m3.material.io/components/text-fields/overview">
            офицальном сайт
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>

        <FilledTextInput label="First name" />
      </div>
    </div>
  )
}

export default FilledTextFieldPage
