import Image from "next/image"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Display from "@/shared/typography/Display"

import CosSinImage from "@/public/templates/cossin.png"
import InlineLink from "@/components/InlineLink"

export const metadata = {
  title: "Ashel M3 Kit | Templates",
  description: "Готовые темплейты, используя компоненты M3",
}

const Templates = () => {
  return (
    <main className="p-10 flex flex-col gap-3">
      <Display>Templates</Display>
      <Paragraph>
        В данном разделе представлены UI шаблоны, которые раскрывают возможности
        M3 Kit.
      </Paragraph>

      <div className="flex flex-col gap-1">
        <Heading>CosSin</Heading>
        <Paragraph>Пример UI для дашборда.</Paragraph>
        <Image
          className="max-w-[600px] my-2 rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
          alt="CosSin template"
          src={CosSinImage}
          width={1920}
          quality={100}
        />
        <div className="flex gap-4">
          <InlineLink href="https://github.com/7evenUp/dashboard-m3">
            Source code
          </InlineLink>
          <InlineLink href="https://dashboard-m3.vercel.app/">
            Deploy
          </InlineLink>
        </div>
      </div>
    </main>
  )
}

export default Templates
