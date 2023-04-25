"use client"

import React from "react"

import Display from "@/components/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import InlineLink from "@/components/InlineLink"
import InlineCode from "@/components/InlineCode"
import InternalLink from "@/components/InternalLink"

import Button from "@/lib/Button"
import { useSnackbar } from "@/lib/Snackbar/useSnackbar"


const SnackbarPage = () => {
  const { addSnackbar } = useSnackbar()

  return (
    <div>
      <Display className="mb-4">Snackbar</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Snackbar предоставляет краткие сообщения о процессах приложения в
          нижней части экрана.
        </Paragraph>
        <Paragraph>
          Подробнее можете прочитать на{" "}
          <InlineLink href="https://m3.material.io/components/snackbar/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <Button
          appearance="tonal"
          onClick={() => {
            addSnackbar({
              supportingText: "This is default snackbar with only supporting text",
            })
          }}
        >
          Open default
        </Button>
        <Button
          appearance="tonal"
          onClick={() => {
            addSnackbar({
              supportingText: "Snackbar with close button",
              withClose: true
            })
          }}
        >
          With close
        </Button>
        <Button
          appearance="tonal"
          onClick={() => {
            addSnackbar({
              supportingText: "Snackbar with action button",
              action: 'Action'
            })
          }}
        >
          With action
        </Button>
        <Button
          appearance="tonal"
          onClick={() => {
            addSnackbar({
              supportingText: "Snackbar with close and action buttons",
              action: 'Action',
              withClose: true
            })
          }}
        >
          With close and action
        </Button>

        <Heading>Компонент</Heading>
        <Paragraph>
          Компонент можно сохранить в{" "}
          <InlineCode>src/components/ui/Snackbar.tsx</InlineCode>. Обратите
          внимание на необходимые зависимости:{" "}
          <InternalLink href="/typography/headline">Headline</InternalLink>,{" "}
          <InternalLink href="/typography/body">Body</InternalLink> и{" "}
          <InternalLink href="/components/common-buttons">Button</InternalLink>.
        </Paragraph>

        <Heading>Использование</Heading>
      </div>
    </div>
  )
}

export default SnackbarPage
