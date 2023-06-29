import Image from "next/image"

import Display from "@/components/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import FormExample from "@/components/FormExample"

export const metadata = {
  title: "Ashel UI Kit | Forms guide",
  description:
    "Руководство о том, как пользоваться Ashel UI Kit для построения HTML форм",
}

const Forms = () => {
  return (
    <main className="p-10 flex flex-col gap-3">
      <Display>React Hook Form + Ashel UI Kit</Display>
      <Paragraph>
        Сегодня разберёмся с вами как строить правильные, удобные,
        типизированные, с валидацией и самое главное - красивые HTML формы.
      </Paragraph>

      <FormExample />
    </main>
  )
}

export default Forms
