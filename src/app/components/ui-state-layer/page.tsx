import React from "react"

import Display from "@/shared/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"

import { componentSrc } from "./codeSamples"

const page = () => {
  return (
    <div>
      <Display className="mb-4">UI State Layer</Display>

      <div className="flex flex-col items-start gap-2">
        <Paragraph>
          Можно подробно прочитать о том, что такое State Layers на{" "}
          <InlineLink href="https://shared.material.io/foundations/interaction/states/state-layers">
            официальном сайте
          </InlineLink>
          . Учтите, что данный компонент не имеет ничего общего со{" "}
          <InlineCode>State / useState</InlineCode>, предоставляемых библиотекой
          react.
        </Paragraph>

        <Heading>Компонент</Heading>
        <Paragraph>Скопируйте и вставьте код в свой проект.</Paragraph>
        <Paragraph>
          Можно сохранить компонент в файл{" "}
          <InlineCode>src/components/ui/UIStateLayer.tsx</InlineCode>:
        </Paragraph>
        <Code language="tsx" code={componentSrc} />
      </div>
    </div>
  )
}

export default page
