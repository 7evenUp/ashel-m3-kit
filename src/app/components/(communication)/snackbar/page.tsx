"use client"

import React from "react"

import Display from "@/shared/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import InlineLink from "@/components/InlineLink"
import InlineCode from "@/components/InlineCode"
import InternalLink from "@/components/InternalLink"
import Code from "@/components/Code"

import Button from "@/shared/ui/Button"
import { useSnackbar } from "@/shared/ui/Snackbar/useSnackbar"

import {
  snackbarSource,
  snackbarsSource,
  usageHook,
  usageProviders,
  usageRoot,
  useSnackbarSource,
} from "./codeSamples"

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
          <InlineLink href="https://shared.material.io/components/snackbar/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>
        <Button
          appearance="tonal"
          onClick={() => {
            addSnackbar({
              supportingText:
                "This is default snackbar with only supporting text",
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
              withClose: true,
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
              action: "Action",
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
              action: "Action",
              withClose: true,
            })
          }}
        >
          With close and action
        </Button>

        <Heading>Компонент</Heading>
        <Paragraph>
          Данный компонент состоит из трёх файлов, каждый из которых можно
          сохранить в папку{" "}
          <InlineCode>src/components/ui/Snackbar/...</InlineCode>. Обратите
          внимание на необходимые для компонента зависимости:{" "}
          <InternalLink href="/typography/body">Body</InternalLink> и{" "}
          <InternalLink href="/components/common-buttons">Button</InternalLink>.
        </Paragraph>

        <Paragraph>
          Также будет необходимо установить{" "}
          <InlineLink href="https://www.radix-ui.com/docs/primitives/components/toast">
            @radix-ui/react-toast
          </InlineLink>
        </Paragraph>

        <Code language="bash" code="yarn add @radix-ui/react-toast" />

        <Paragraph>
          Первый файл - стилизованные radix-ui компоненты. Сохраним в файл{" "}
          <InlineCode>Snackbar.tsx</InlineCode>
        </Paragraph>
        <Code language="tsx" code={snackbarSource} />

        <Paragraph>
          Второй файл - кастомный react хук, который делегирует создание
          Snackbar. Сохраним в файл <InlineCode>useSnackbar.tsx</InlineCode>
        </Paragraph>
        <Code language="tsx" code={useSnackbarSource} />

        <Paragraph>
          Третий файл - композиция стилизованных компонентов совместно с
          состоянием нашего react хука. Сохраним в файл{" "}
          <InlineCode>Snackbars.tsx</InlineCode>
        </Paragraph>
        <Code language="tsx" code={snackbarsSource} />

        <Heading>Использование</Heading>
        <Paragraph>
          После копирования файлов, компонент <InlineCode>Snackbars</InlineCode>
          , содержащий всю логику, необходимо добавить на самый верхний уровень
          вашего приложения
        </Paragraph>
        <Paragraph>
          В моём случае, я размещаю данный компонент в компоненте{" "}
          <InlineCode>Providers</InlineCode>, содержащем все провайдеры для
          моего приложения:
        </Paragraph>
        <Code language="tsx" code={usageProviders} />

        <Paragraph>
          После чего, данный компонент добавляется в корневой файл приложения, в
          моём случае в <InlineCode>layout.tsx</InlineCode>
        </Paragraph>
        <Code language="tsx" code={usageRoot} />

        <Paragraph>
          Как же вызвать непосредственно Snackbar? Для этого необходим наш
          второй файл - React хук <InlineCode>useSnackbar.tsx</InlineCode>
        </Paragraph>
        <Code language="tsx" code={usageHook} />

        <Paragraph>
          Хук принимает в качестве аргумента объект с тремя свойствами:{" "}
        </Paragraph>

        <Paragraph>
          <InlineCode>supportingText</InlineCode> - String. Отвечает за текст,
          находящимся на Snackbar. Является обязательным полем.
        </Paragraph>
        <Paragraph>
          <InlineCode>action</InlineCode> - String. Текст для кнопки - действия.
        </Paragraph>
        <Paragraph>
          <InlineCode>withClose</InlineCode> - Boolean. Если значение ==={" "}
          <InlineCode>true</InlineCode>, то в правой части Snackbar будет
          крестик для закрытия. По умолчанию <InlineCode>false</InlineCode>.
        </Paragraph>
      </div>
    </div>
  )
}

export default SnackbarPage
