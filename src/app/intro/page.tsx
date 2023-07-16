import Image from "next/image"

import Display from "@/shared/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import Code from "@/components/Code"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import ImageWithText from "@/components/ImageWithText"

import figmaPic from "@/public/intro/figma.gif"
import jsonPic from "@/public/intro/json.png"
import afterCopyingPic from "@/public/intro/after-copy.png"
import finalResultPic from "@/public/intro/result.gif"

import {
  appWithProviders,
  basicApp,
  classNamesSrc,
  darkModeTailwind,
  elevationExample,
  finalAppSrc,
  providersSrc,
  talwindConfigExample,
  themeToggleSrc,
} from "./codeSamples"
import InternalLink from "@/components/InternalLink"

export const metadata = {
  title: "Ashel M3 Kit | About",
  description:
    "About the Material Design V3, why I started this project and goals I want to reach",
}

const Intro = () => {
  return (
    <main className="p-10 flex flex-col gap-3">
      <Display>Introduction</Display>
      <Paragraph>
        Данная страница описывает использование Ashel M3 Kit совместно с Next.js
        13 версии. На данный момент есть аналогичный способ использования -{" "}
        <InternalLink href="/guides/vite">Vite</InternalLink>.
      </Paragraph>
      <Heading>Установка</Heading>
      <Paragraph>
        Давайте разберёмся со всеми зависимостями, которые нам предстоит
        установить для разработки будущих приложений.
      </Paragraph>
      <Paragraph>
        Любой наш проект будет начинаться с установки{" "}
        <InlineLink href="https://nextjs.org/">Next JS</InlineLink> .
      </Paragraph>
      <Code
        language="bash"
        code="yarn create next-app --experimental-app --tailwind --ts --src-dir"
      />
      <Paragraph>
        Используя флаги <InlineCode>--tailwind</InlineCode>,{" "}
        <InlineCode>--ts</InlineCode>, <InlineCode>--src-dir</InlineCode>, мы по
        умолчанию устанавливаем{" "}
        <InlineLink href="https://tailwindcss.com/docs/guides/nextjs">
          Tailwind CSS
        </InlineLink>
        , typescript и используем папку src.
      </Paragraph>
      <Paragraph>Установим дополнительные зависимости:</Paragraph>
      <Code
        language="bash"
        code="yarn add class-variance-authority clsx tailwind-merge"
      />
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
        Я подготовил для вас{" "}
        <InternalLink href="/colors/themes">
          набор готовых цветовых палитр
        </InternalLink>
        . Можете выбрать на свой вкус и цвет.
      </Paragraph>

      <Paragraph>
        Если не хотите тратить время на поиски идеальной для вас цветовой темы,
        можете воспользоваться готовыми цветовыми палитрами и пропустить блок с
        загрузкой цвета.
      </Paragraph>

      <Paragraph>
        Воспользуемся{" "}
        <InlineLink href="https://goo.gle/material-theme-builder-figma">
          официальным плагином
        </InlineLink>{" "}
        от M3. На этапе экспорта цветов в JSON, можете поиграться с цветами,
        которые хотите использовать для своего сайта. (Советую изменять только{" "}
        <InlineCode>Primary</InlineCode> цвет, остальное подстроится
        автоматически)
      </Paragraph>
      <Image
        className="my-6 rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
        alt="Figma proccess"
        src={figmaPic}
        width={600}
      />
      <Paragraph>
        После выполненных действий вы получите JSON файлик, из которого нам
        нужно будет вытянуть цвета для нашего дизайна. Скопируйте поля{" "}
        <InlineCode>&quot;light&quot;</InlineCode> и{" "}
        <InlineCode>&quot;dark&quot;</InlineCode>.
      </Paragraph>
      <Image
        className="my-6 rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
        alt="JSON color values"
        src={jsonPic}
        width={300}
      />
      <Paragraph>
        После чего нужно расширить диапазон цветов темы проекта. Вставьте данные
        значения в ваш <InlineCode>tailwind.config.js</InlineCode> в раздел{" "}
        <InlineCode>{`theme: { extend: {colors: {...}}}`}</InlineCode>.
      </Paragraph>
      <ImageWithText alt="After copying" width={600} src={afterCopyingPic}>
        Вы должны увидеть у себя тоже самое.
      </ImageWithText>
      <Paragraph>
        Также сразу расширим свойство <InlineCode>boxShadow</InlineCode>. Про
        тени можете прочитать на{" "}
        <InlineLink href="https://shared.material.io/styles/elevation/overview">
          официальном сайте
        </InlineLink>
        .
      </Paragraph>
      <Code language="typescript" code={elevationExample} />
      <Paragraph>
        Можем приступать непосредственно к написанию кода. Измените ваш файл{" "}
        <InlineCode>src/app/page.tsx</InlineCode> таким образом:
      </Paragraph>
      <Code language="tsx" code={basicApp} />
      <Heading>Смена цветовой темы</Heading>
      <Paragraph>
        Как менять цветовую тему можете решить сами, лично я использую
        библиотеку{" "}
        <InlineLink href="https://www.npmjs.com/package/next-themes">
          next-themes
        </InlineLink>
        .
      </Paragraph>
      <Code language="bash" code="yarn add next-themes" />
      <Paragraph>
        Для доступа приложения к цветовой теме, его необходимо обернуть в{" "}
        <InlineCode>ThemeProvider</InlineCode>. Учитывая, что этому компоненту
        требуется указывать <InlineCode>use client</InlineCode> директиву, мы не
        можем напрямую использовать его в <InlineCode>layout.tsx</InlineCode>.
        Считается хорошей практикой выносить все провайдеры в отдельный
        компонент. Мы так и поступим. Создайте компонент по пути{" "}
        <InlineCode>src/components/Providers.tsx</InlineCode> и вставьте
        следующий код:
      </Paragraph>
      <Code language="tsx" code={providersSrc} />
      <Paragraph>
        Далее оберните ваше приложение этим компонентом по пути{" "}
        <InlineCode>src/app/layout.tsx</InlineCode>
      </Paragraph>
      <Code language="tsx" code={appWithProviders} />
      <Paragraph>
        Для корректной работы Tailwind с тёмной темой добавим поле{" "}
        <InlineCode>darkMode</InlineCode> со значением{" "}
        <InlineCode>&apos;class&apos;</InlineCode> в наш{" "}
        <InlineCode>tailwind.config.js</InlineCode> :
      </Paragraph>
      <Code language="javascript" code={darkModeTailwind} />
      <Paragraph>
        Ваш <InlineCode>tailwind.config.js</InlineCode> в конечном счёте должен
        выглядеть так:
      </Paragraph>
      <Code language="javascript" code={talwindConfigExample} />
      <Paragraph>
        Создадим файл для компонента с кнопками для переключения темы и
        расположим его на{" "}
        <InlineCode>src/components/ThemeToggle.tsx</InlineCode>
      </Paragraph>
      <Code language="tsx" code={themeToggleSrc} />
      <Paragraph>
        Добавим компонент в наш <InlineCode>src/app/page.tsx</InlineCode>
      </Paragraph>
      <Code language="tsx" code={finalAppSrc} />
      <Paragraph>
        Поздравляю, вы создали приложение, полностью адаптированное под тёмную
        тему, с готовой дизайн палитрой.
      </Paragraph>
      <Image
        className="my-6 rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
        alt="Final result"
        src={finalResultPic}
        width={600}
      />
      <Heading>Что дальше</Heading>
      <Paragraph>
        Далее можете почитать о самом Material Design 3 на{" "}
        <InlineLink href="https://shared.material.io/">
          официальном сайте
        </InlineLink>
        , чтоб понять основные принципы. После чего возвращайтесь сюда и
        продвигайтесь дальше по сайту.
      </Paragraph>
    </main>
  )
}

export default Intro
