"use client"

import Image from "next/image"
import { Copy } from "iconoir-react"

import Heading from "@/components/Heading"
import InlineCode from "@/components/InlineCode"
import Paragraph from "@/components/Paragraph"
import Code from "@/components/Code"

import { useSnackbar } from "@/shared/ui/Snackbar/useSnackbar"
import Display from "@/shared/typography/Display"
import IconButton from "@/shared/ui/IconButton"

import cyanLight from "@/public/colors/themes/cyan/light.png"
import cyanDark from "@/public/colors/themes/cyan/dark.png"
import greenLight from "@/public/colors/themes/green/light.png"
import greenDark from "@/public/colors/themes/green/dark.png"
import corralLight from "@/public/colors/themes/corral/light.png"
import corralDark from "@/public/colors/themes/corral/dark.png"
import purpleLight from "@/public/colors/themes/purple/light.png"
import purpleDark from "@/public/colors/themes/purple/dark.png"
import yellowLight from "@/public/colors/themes/yellow/light.png"
import yellowDark from "@/public/colors/themes/yellow/dark.png"

import {
  tailwindExample,
  cyanTheme,
  greenTheme,
  purpleTheme,
  corralTheme,
  yellowTheme,
} from "./codeSamples"

const Themes = () => {
  const { addSnackbar } = useSnackbar()
  return (
    <div>
      <Display className="mb-4">Themes</Display>

      <div className="flex flex-col gap-2">
        <Paragraph>
          В данном разделе я подготовил для вас набор готовых цветовых палитр.
          Вам остаётся лишь выбрать понравившуюся и скопировать значения цветов
          в свой <InlineCode>tailwind.config.js</InlineCode> файл.
        </Paragraph>

        <Code language="javascript" code={tailwindExample} />

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Cyan (Бирюзовый)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(cyanTheme)

              addSnackbar({
                supportingText: "Бирюзовая тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Cyan Light theme"
            src={cyanLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Cyan Dark theme"
            src={cyanDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Green (Зелёный)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(greenTheme)

              addSnackbar({
                supportingText: "Зелёная тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Green Light theme"
            src={greenLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Green Dark theme"
            src={greenDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Purple (Фиолетовый)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(purpleTheme)

              addSnackbar({
                supportingText: "Фиолетовая тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Purple Light theme"
            src={purpleLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Purple Dark theme"
            src={purpleDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Corral (Коралловый)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(corralTheme)

              addSnackbar({
                supportingText: "Коралловая тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Corral Light theme"
            src={corralLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Corral Dark theme"
            src={corralDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Yellow (Жёлтый)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(yellowTheme)

              addSnackbar({
                supportingText: "Жёлтая тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Yellow Light theme"
            src={yellowLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Yellow Dark theme"
            src={yellowDark}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default Themes
