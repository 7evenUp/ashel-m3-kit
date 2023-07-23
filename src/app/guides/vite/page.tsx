import Image from "next/image"

import Display from "@/shared/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import InstallPackage from "@/components/InstallPackage"

import ExampleAppGif from "@/public/guides/vite/ExampleAppGif.gif"

import {
  appExample,
  btnSrc,
  classNamesSrc,
  labelSrc,
  talwindConfigExample,
  tsConfig,
  uiStateLayerSrc,
  viteConfig,
} from "./codeSamples"

export const metadata = {
  title: "Ashel M3 Kit | Vite guide",
  description:
    "Руководство о том, как пользоваться Ashel M3 Kit совместно с Vite",
}

const Vite = () => {
  return (
    <main className="p-10 flex flex-col gap-3">
      <Display>Vite + React + Ashel M3 Kit</Display>
      <Heading>Почему</Heading>
      <Paragraph>
        Может быть так, что вам не нужен весь богатый функционал Next.js.
        Допустим вам нужен просто фронт без серверной части, или, допустим, она
        уже у вас есть. В данном случае идеальным будет использование сборщика
        Vite.
      </Paragraph>
      <Heading>Установка</Heading>

      <Paragraph>Создадим основу будущего приложения</Paragraph>

      <InstallPackage
        npmUnique="npm create vite@latest m3-react-app -- --template react-ts"
        yarnUnique="yarn create vite m3-react-app --template react-ts"
        pnpmUnique="pnpm create vite m3-react-app --template react-ts"
      />

      <Paragraph>Далее установим TailwindCSS.</Paragraph>
      <Paragraph>
        Подробное описание установки можно посмотреть на{" "}
        <InlineLink href="https://tailwindcss.com/docs/guides/vite">
          официальном сайте
        </InlineLink>
        .
      </Paragraph>

      <Paragraph>Установим дополнительные зависимости:</Paragraph>
      <InstallPackage packageName="class-variance-authority clsx tailwind-merge" />

      <Paragraph>
        Создадим helper функцию <InlineCode>cn</InlineCode> для работы с css
        классами в файл <InlineCode>src/utils/classNames.ts</InlineCode>:
      </Paragraph>
      <Code code={classNamesSrc} language="typescript" />
      <Paragraph>
        Многие реализованные компоненты используют данную функцию. Она будет
        помогать нам условно добавлять tailwind классы к элементам.
      </Paragraph>
      <Heading>Загружаем цвета</Heading>
      <Paragraph>
        Подробная установка цветовой палитры описана на данной{" "}
        <InternalLink href="/intro">странице</InternalLink>.
      </Paragraph>
      <Paragraph>
        Сейчас же можете просто скопировать данный{" "}
        <InlineCode>tailwind.config.js</InlineCode> файл.
      </Paragraph>
      <Code language="javascript" code={talwindConfigExample} />

      <Heading>Настроим path-alias</Heading>
      <Paragraph>
        Все файлы Ashel M3 Kit используют path-alias (символ @). Это необходимо
        для того, чтобы при импорте файла вместо{" "}
        <InlineCode>{"../../src/shared/ui/Button"}</InlineCode> было{" "}
        <InlineCode>{"@/shared/ui/Button"}</InlineCode>.
      </Paragraph>
      <Paragraph>
        Если вам не так необходима данная функция, можете пропустить секцию.
        Учтите, что вам придётся переписывать импорты во всех файлах, которые вы
        скопируете.
      </Paragraph>

      <InstallPackage packageName="-D @types/node" />

      <Paragraph>
        Изменим <InlineCode>vite.config.ts</InlineCode>:
      </Paragraph>
      <Code language="typescript" code={viteConfig} />
      <Paragraph>
        Далее сообщим непосредственно самому typescript, что мы используем
        path-alias. Измените ваш <InlineCode>tsconfig.json</InlineCode>:
      </Paragraph>
      <Code language="json" code={tsConfig} />

      <Paragraph>
        Далее скопируем в нашу директорию первый UI компонент - кнопку.
        Разместите файл по пути{" "}
        <InlineCode>src/shared/ui/Button.tsx</InlineCode>.
      </Paragraph>

      <Code language="tsx" code={btnSrc} />
      <Paragraph>У неё есть два компонента-зависимости.</Paragraph>
      <Paragraph>
        Label сохраните в{" "}
        <InlineCode>src/shared/typography/Label.tsx</InlineCode>, а UIStateLayer
        в <InlineCode>src/shared/ui/UIStateLayer.tsx</InlineCode>.
      </Paragraph>
      <Code language="tsx" code={labelSrc} />
      <Code language="tsx" code={uiStateLayerSrc} />

      <Paragraph>
        Можем приступать непосредственно к написанию кода. Измените ваш файл{" "}
        <InlineCode>src/App.tsx</InlineCode> таким образом:
      </Paragraph>
      <Code language="tsx" code={appExample} />

      <Image
        className="my-6 rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
        alt="Example App"
        src={ExampleAppGif}
        width={600}
      />
      <Paragraph>
        Поздравляю, вы создали приложение с готовой тёмной темой и
        компонентом-кнопкой, готовой к использованию, и всё это используя Vite.
      </Paragraph>
      <Heading>Что дальше</Heading>
      <Paragraph>
        Далее можете почитать о самом Material Design 3 на{" "}
        <InlineLink href="https://shared.material.io/">
          официальном сайте
        </InlineLink>
        , чтобы понять основные принципы дизайн системы. После чего
        возвращайтесь сюда и импортируйте в свой проект компоненты, которые вам
        необходимы.
      </Paragraph>
    </main>
  )
}

export default Vite
