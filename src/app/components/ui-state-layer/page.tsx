import Code from "@/components/Code"
import Heading from "@/components/Heading"
import InlineCode from "@/components/InlineCode"
import Paragraph from "@/components/Paragraph"
import Display from "@/components/ui/text/Display"
import React from "react"
import { componentSrc } from "./codeSamples"
import InlineLink from "@/components/InlineLink"

const page = () => {
  return (
    <div>
      <Display className="mb-4">UI State Layer</Display>

      <div className="flex flex-col items-start gap-2">
        <Paragraph>
          Можно подробно прочитать о том, что такое State Layers на{" "}
          <InlineLink href="https://m3.material.io/foundations/interaction/states/state-layers">
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
