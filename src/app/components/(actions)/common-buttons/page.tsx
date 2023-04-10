import Code from "@/components/Code"
import Heading from "@/components/Heading"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import Paragraph from "@/components/Paragraph"
import Subheading from "@/components/Subheading"
import Display from "@/components/ui/text/Display"
import Button from "@/lib/Button"
import { Plus } from "iconoir-react"

const CommonButtonsPage = () => {
  return (
    <div>
      <Display className="mb-4">Common Buttons</Display>

      <div className="flex flex-col items-start gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Есть 5 видов кнопок: Elevated, Filled, Tonal, Outlined, Text. Подробно
          об использовании каждой из кнопок можете почитать на{" "}
          <InlineLink href="https://m3.material.io/components/buttons/guidelines">
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
          особенно при представлении нескольких вариантов. Например в форме
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
          Можно сохранить компонент в файл{" "}
          <InlineCode>src/components/ui/Button.tsx</InlineCode>:
        </Paragraph>
        <Code
          language="tsx"
          code={`import Label from "@/components/ui/text/Label"
import UIStateLayer from "@/components/ui/UIStateLayer"
import { cn } from "@/utils/classNames"
import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, FC, ReactNode } from "react"

const buttonVariants = cva(
  "group h-10 rounded-full w-fit disabled:bg-opacity-[0.12] dark:disabled:bg-opacity-[0.12] disabled:cursor-not-allowed disabled:shadow-none disabled:text-light-onSurface disabled:dark:text-dark-onSurface disabled:text-opacity-[0.38] disabled:dark:text-opacity-[0.38] transition-shadow",
  {
    variants: {
      appearance: {
        elevated:
          "bg-light-surfaceVariant dark:bg-dark-surfaceVariant shadow-elevation1 disabled:bg-light-primary disabled:dark:bg-dark-primary hover:shadow-elevation2 active:shadow-elevation1 text-light-primary dark:text-dark-primary",
        filled:
          "bg-light-primary dark:bg-dark-primary disabled:bg-light-onSurface disabled:dark:bg-dark-onSurface hover:shadow-elevation1 active:shadow-none text-light-onPrimary dark:text-dark-onPrimary",
        tonal:
          "bg-light-secondaryContainer dark:bg-dark-secondaryContainer disabled:bg-light-onSurface disabled:dark:bg-dark-onSurface hover:shadow-elevation1 active:shadow-none text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer",
        outlined:
          "border border-light-outline dark:border-dark-outline disabled:border-light-onSurface disabled:dark:border-dark-onSurface disabled:border-opacity-[0.12] dark:disabled:border-opacity-[0.12] text-light-primary dark:text-dark-primary",
        text: "text-light-primary dark:text-dark-primary",
      },
    },
    defaultVariants: {},
  }
)

const uiStateLayerVariants = cva("", {
  variants: {
    appearance: {
      elevated: "bg-light-primary dark:bg-dark-primary",
      filled: "bg-light-onPrimary dark:bg-dark-onPrimary",
      tonal: "bg-light-onSecondaryContainer dark:bg-dark-onSecondaryContainer",
      outlined: "bg-light-primary dark:bg-dark-primary",
      text: "bg-light-primary dark:bg-dark-primary px-3",
    },
  },
  defaultVariants: {},
})

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode
}

const Button: FC<Props> = ({
  icon,
  children,
  onClick,
  className,
  appearance,
  disabled,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(className, buttonVariants({ appearance }))}
      {...props}
    >
      <UIStateLayer
        className={cn(
          "rounded-full flex items-center gap-2 px-6",
          icon && "pl-4",
          uiStateLayerVariants({ appearance }),
          icon && appearance === "text" && "pr-4"
        )}
      >
        {icon && <span>{icon}</span>}
        <Label size="large">{children}</Label>
      </UIStateLayer>
    </button>
  )
}

export default Button`}
        />
        <Heading>Использование</Heading>
        <Code
          language="tsx"
          code={`import Button from "@/components/ui/Button"`}
        />
        <Code language="tsx" code={``} />
      </div>
    </div>
  )
}

export default CommonButtonsPage
