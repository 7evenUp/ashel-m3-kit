"use client"

import Display from "@/components/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import InlineLink from "@/components/InlineLink"

import FilledTextInput from "@/lib/FilledTextInput"
import { DeleteCircle, Search } from "iconoir-react"
import Body from "@/components/typography/Body"
import { useState } from "react"

const FilledTextFieldPage = () => {
  const [name, setName] = useState("")
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

        <FilledTextInput
          label="First name"
          value={name}
          onChange={(evt) => setName(evt.currentTarget.value)}
          supportingText="Not enough"
          maxLength={10}
          supportingTextCharCount={`${name.length}/10`}
          trailingIcon={
            <DeleteCircle
              className="hover:cursor-pointer"
              onClick={() => setName("")}
            />
          }
        />

        <FilledTextInput label="Last name" leadingIcon={<Search />} placeholder="Enter your last name" />
        <FilledTextInput label="Address" trailingIcon={<DeleteCircle />} />
        <FilledTextInput
          label="Framework"
          leadingIcon={<Search />}
          trailingIcon={<DeleteCircle />}
        />
      </div>
    </div>
  )
}

export default FilledTextFieldPage
