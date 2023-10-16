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

import defaultLight from "@/public/colors/themes/default/light.png"
import defaultDark from "@/public/colors/themes/default/dark.png"
import burgundyLight from "@/public/colors/themes/burgundy/light.png"
import burgundyDark from "@/public/colors/themes/burgundy/dark.png"
import corralLight from "@/public/colors/themes/corral/light.png"
import corralDark from "@/public/colors/themes/corral/dark.png"
import beigeLight from "@/public/colors/themes/beige/light.png"
import beigeDark from "@/public/colors/themes/beige/dark.png"
import marshLight from "@/public/colors/themes/marsh/light.png"
import marshDark from "@/public/colors/themes/marsh/dark.png"
import greenLight from "@/public/colors/themes/green/light.png"
import greenDark from "@/public/colors/themes/green/dark.png"
import emeraldLight from "@/public/colors/themes/emerald/light.png"
import emeraldDark from "@/public/colors/themes/emerald/dark.png"
import skyLight from "@/public/colors/themes/sky/light.png"
import skyDark from "@/public/colors/themes/sky/dark.png"
import indigoLight from "@/public/colors/themes/indigo/light.png"
import indigoDark from "@/public/colors/themes/indigo/dark.png"
import purpleLight from "@/public/colors/themes/purple/light.png"
import purpleDark from "@/public/colors/themes/purple/dark.png"
import pinkLight from "@/public/colors/themes/pink/light.png"
import pinkDark from "@/public/colors/themes/pink/dark.png"

import {
  tailwindExample,
  burgundyTheme,
  greenTheme,
  purpleTheme,
  corralTheme,
  tailwindVariables,
  defaultTheme,
  beigeTheme,
  marshTheme,
  emeraldTheme,
  skyTheme,
  indigoTheme,
  pinkTheme,
} from "./codeSamples"
import Body from "@/shared/typography/Body"
import Button from "@/shared/ui/Button"

const Themes = () => {
  const { addSnackbar } = useSnackbar()
  return (
    <div>
      <Display className="mb-4">Themes</Display>

      <div className="flex flex-col gap-2">
        <Paragraph>
          В данном разделе я подготовил для вас набор готовых цветовых палитр.
          Вам необходимо заранее расширить tailwind цвета в вашем{" "}
          <InlineCode>tailwind.config.js</InlineCode> файле:
        </Paragraph>

        <Code language="javascript" code={tailwindExample} />

        <Button
          appearance="filled"
          onClick={() => {
            navigator.clipboard.writeText(tailwindVariables)

            addSnackbar({
              supportingText: "Tailwind цвета скопированы",
            })
          }}
        >
          Скопировать tailwind цвета
        </Button>

        <div className="my-8">
          <Paragraph>
            Теперь остаётся лишь выбрать понравившуюся цветовую тему и
            скопировать значения цветов в свой{" "}
            <InlineCode>globals.css</InlineCode> файл.
          </Paragraph>
        </div>

        <div className="flex items-center gap-2 max-w-[700px]">
          <Heading>Default (Стандартная)</Heading>
          <Body>* Как на этом сайте</Body>
          <IconButton
            className="ml-auto"
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(defaultTheme)

              addSnackbar({
                supportingText: "Стандартная тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Default Light theme"
            src={defaultLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Default Dark theme"
            src={defaultDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Burgundy (Бордовая)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(burgundyTheme)

              addSnackbar({
                supportingText: "Бордовая тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Burgundy Light theme"
            src={burgundyLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Burgundy Dark theme"
            src={burgundyDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Corral (Коралловая)</Heading>
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
            className="rounded-xl border border-outlineVariant"
            alt="Corral Light theme"
            src={corralLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Corral Dark theme"
            src={corralDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Beige (Бежевая)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(beigeTheme)

              addSnackbar({
                supportingText: "Бежевая тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Beige Light theme"
            src={beigeLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Beige Dark theme"
            src={beigeDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Marsh (Болотная)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(marshTheme)

              addSnackbar({
                supportingText: "Болотная тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Marsh Light theme"
            src={marshLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Marsh Dark theme"
            src={marshDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Green (Зелёная)</Heading>
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
            className="rounded-xl border border-outlineVariant"
            alt="Green Light theme"
            src={greenLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Green Dark theme"
            src={greenDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Emerald (Изумрудная)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(emeraldTheme)

              addSnackbar({
                supportingText: "Изумрудная тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Emerald Light theme"
            src={emeraldLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Emerald Dark theme"
            src={emeraldDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Sky (Небесная)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(skyTheme)

              addSnackbar({
                supportingText: "Небесная тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Sky Light theme"
            src={skyLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Sky Dark theme"
            src={skyDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Indigo (Индиго)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(indigoTheme)

              addSnackbar({
                supportingText: "Индиго тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Indigo Light theme"
            src={indigoLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Indigo Dark theme"
            src={indigoDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Purple (Фиолетовая)</Heading>
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
            className="rounded-xl border border-outlineVariant"
            alt="Purple Light theme"
            src={purpleLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Purple Dark theme"
            src={purpleDark}
            quality={100}
          />
        </div>

        <div className="flex justify-between items-center max-w-[700px]">
          <Heading>Pink (Розовая)</Heading>
          <IconButton
            appearance="tonal"
            icon={<Copy />}
            onClick={() => {
              navigator.clipboard.writeText(pinkTheme)

              addSnackbar({
                supportingText: "Розовая тема скопированна",
              })
            }}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Pink Light theme"
            src={pinkLight}
            quality={100}
          />
        </div>
        <div className="max-w-[700px]">
          <Image
            className="rounded-xl border border-outlineVariant"
            alt="Pink Dark theme"
            src={pinkDark}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default Themes
