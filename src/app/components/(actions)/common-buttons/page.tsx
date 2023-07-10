import fs from "fs"
import path from "path"
import { Plus } from "iconoir-react"

import Display from "@/shared/typography/Display"
import Button from "@/shared/ui/Button"

import Heading from "@/components/Heading"
import Subheading from "@/components/Subheading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"

import { usageCode, usageWithIconsCode } from "./codeSamples"

const CommonButtonsPage = () => {
  const componentFilePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "ui",
    "Button.tsx"
  )
  const componentCode = fs.readFileSync(componentFilePath, {
    encoding: "utf-8",
    flag: "r",
  })

  return (
    <div>
      <Display className="mb-4">Common Buttons</Display>

      <div className="flex flex-col items-start gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Есть 5 видов кнопок: Elevated, Filled, Tonal, Outlined, Text. Подробно
          об использовании каждой из кнопок можете почитать на{" "}
          <InlineLink href="https://shared.material.io/components/buttons/guidelines">
            официальном сайте
          </InlineLink>
          . Здесь же я опишу применение кратко.
        </Paragraph>

        <Heading>Примеры</Heading>
        <Subheading>Elevated</Subheading>
        <Paragraph>
          Elevated кнопки - это, по сути, tonal кнопки с тенью. Чтобы
          предотвратить расползание теней, используйте их только в случае
          крайней необходимости, например, когда кнопка требует визуального
          отделения от фона с рисунком.
        </Paragraph>
        <div className="flex gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10">
          <div className="flex flex-col gap-4">
            <Button appearance="elevated" type="button">
              Elevated
            </Button>
            <Button appearance="elevated" type="button" icon={<Plus />}>
              Elevated
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button appearance="elevated" type="button" disabled>
              Elevated
            </Button>
            <Button
              appearance="elevated"
              type="button"
              icon={<Plus />}
              disabled
            >
              Elevated
            </Button>
          </div>
        </div>

        <Subheading>Filled</Subheading>
        <Paragraph>
          Filled кнопки оказывают наибольшее визуальное воздействие после{" "}
          <InlineLink>FAB</InlineLink> и должны использоваться для важных,
          завершающих действий, таких как <InlineCode>Сохранить</InlineCode>,{" "}
          <InlineCode>Присоединиться</InlineCode> или{" "}
          <InlineCode>Подтвердить</InlineCode>.
        </Paragraph>
        <div className="flex gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10">
          <div className="flex flex-col gap-4">
            <Button appearance="filled" type="button">
              Filled
            </Button>
            <Button appearance="filled" type="button" icon={<Plus />}>
              Filled
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button appearance="filled" type="button" disabled>
              Filled
            </Button>
            <Button appearance="filled" type="button" icon={<Plus />} disabled>
              Filled
            </Button>
          </div>
        </div>

        <Subheading>Filled Tonal</Subheading>
        <Paragraph>
          Tonal кнопка - это альтернативная середина между кнопками filled и
          outlined. Они полезны в контекстах, где кнопка с более низким
          приоритетом требует немного большего внимания, чем outlined может
          предоставить, например, <InlineCode>Далее</InlineCode> в настройке
          профиля. Tonal кнопки используют secondary цветовое отображение.
        </Paragraph>
        <div className="flex gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10">
          <div className="flex flex-col gap-4">
            <Button appearance="tonal" type="button">
              Filled Tonal
            </Button>
            <Button appearance="tonal" type="button" icon={<Plus />}>
              Filled Tonal
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button appearance="tonal" type="button" disabled>
              Filled Tonal
            </Button>
            <Button appearance="tonal" type="button" icon={<Plus />} disabled>
              Filled Tonal
            </Button>
          </div>
        </div>

        <Subheading>Outlined</Subheading>
        <Paragraph>
          Outlined кнопки - это кнопки со средним акцентом. Они содержат
          действия, которые важны, но не являются основным действием в
          приложении.
        </Paragraph>
        <Paragraph>
          Outlined кнопки хорошо сочетаются с filled кнопками, указывая на
          альтернативное, второстепенное действие.
        </Paragraph>
        <div className="flex gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10">
          <div className="flex flex-col gap-4">
            <Button appearance="outlined" type="button">
              Outlined
            </Button>
            <Button appearance="outlined" type="button" icon={<Plus />}>
              Outlined
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button appearance="outlined" type="button" disabled>
              Outlined
            </Button>
            <Button
              appearance="outlined"
              type="button"
              icon={<Plus />}
              disabled
            >
              Outlined
            </Button>
          </div>
        </div>

        <Subheading>Text</Subheading>
        <Paragraph>
          Text кнопки используются для действий с наименьшим приоритетом,
          особенно при представлении нескольких вариантов. Например, в форме
          опроса, где ответами являются <InlineCode>Да</InlineCode>,{" "}
          <InlineCode>Нет</InlineCode> и <InlineCode>Возможно</InlineCode>.
        </Paragraph>
        <div className="flex gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10">
          <div className="flex flex-col gap-4">
            <Button appearance="text" type="button">
              Text button
            </Button>
            <Button appearance="text" type="button" icon={<Plus />}>
              Text button
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button appearance="text" type="button" disabled>
              Text button
            </Button>
            <Button appearance="text" type="button" icon={<Plus />} disabled>
              Text button
            </Button>
          </div>
        </div>

        <Heading>Компонент</Heading>
        <Paragraph>Скопируйте и вставьте код в свой проект.</Paragraph>
        <Paragraph>
          Обратите внимание, что компонент имеет зависимости таких компонентов
          как <InternalLink href="/typography/label">Label</InternalLink> и{" "}
          <InternalLink href="/components/ui-state-layer">
            UIStateLayer
          </InternalLink>
          . Если вы еще не добавили их в свой проект, следует заняться сперва
          ими.
        </Paragraph>
        <Paragraph>
          Можно сохранить компонент в файл{" "}
          <InlineCode>src/shared/ui/Button.tsx</InlineCode>:
        </Paragraph>
        <Code language="tsx" code={componentCode} />

        <Heading>Использование</Heading>
        <Code language="tsx" code={usageCode} />

        <Subheading>Иконки</Subheading>
        <Paragraph>
          Также можно использовать кнопки с иконками. Лично я использую{" "}
          <InlineLink href="https://iconoir.com/">Iconoir</InlineLink>{" "}
          библиотеку. Можете выбрать свою любимую.
        </Paragraph>
        <Code language="tsx" code={usageWithIconsCode} />
      </div>
    </div>
  )
}

export default CommonButtonsPage
