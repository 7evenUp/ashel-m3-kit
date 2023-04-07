import Code from "@/components/Code"
import Heading from "@/components/Heading"
import InlineCode from "@/components/InlineCode"
import InlineLink from "@/components/InlineLink"
import Paragraph from "@/components/Paragraph"
import Display from "@/components/ui/text/Display"
import Image from "next/image"
import figmaPic from "@/public/intro/figma.gif"
import jsonPic from "@/public/intro/json.png"
import afterCopyingPic from "@/public/intro/after-copy.png"
import finalResultPic from "@/public/intro/result.gif"
import ImageWithText from "@/components/ImageWithText"

export const metadata = {
  title: "Ashel UI Kit | About",
  description:
    "About the Material Design V3, why I started this project and goals I want to reach",
}

const Intro = () => {
  return (
    <main className="p-10 flex flex-col gap-3">
      <Display>Introduction</Display>
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
      <Paragraph>Непосредственно установим зависимости:</Paragraph>
      <Code
        language="bash"
        code="yarn add class-variance-authority clsx tailwind-merge"
      />
      <Paragraph>
        Добавим helper функцию <InlineCode>cn</InlineCode> для работы с css
        классами в файл <InlineCode>src/utils/cn.ts</InlineCode>:
      </Paragraph>
      <Code
        code={`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};`}
        language="typescript"
      />
      <Paragraph>
        Она будет помогать нам условно добавлять tailwind классы к элементам
      </Paragraph>
      <Heading>Загружаем цвета</Heading>
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
        После чего вставьте данные значения в ваш{" "}
        <InlineCode>tailwind.config.js</InlineCode>.
      </Paragraph>
      <ImageWithText alt="After copying" width={600} src={afterCopyingPic}>
        Вы должны увидеть у себя тоже самое.
      </ImageWithText>
      <Paragraph>
        Можем начинать непосредственно к написанию кода. Измените ваш файл{" "}
        <InlineCode>src/app/page.tsx</InlineCode> таким образом:
      </Paragraph>
      <Code
        language="tsx"
        code={`export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-light-surface dark:bg-dark-surface">
      <h1 className="text-5xl text-light-onSurface dark:text-dark-onSurface">
        Работает!
      </h1>
      <p className="bg-light-primaryContainer dark:bg-dark-primaryContainer text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer">
        Этот текст находится на primary container
      </p>
    </main>
  );
}`}
      />
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
      <Code
        language="tsx"
        code={`"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default Providers;`}
      />
      <Paragraph>
        Далее оберните ваше приложение этим компонентом по пути{" "}
        <InlineCode>src/app/layout.tsx</InlineCode>
      </Paragraph>
      <Code
        language="tsx"
        code={`import Providers from "@/components/Providers";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}`}
      />
      <Paragraph>
        Добавим поле <InlineCode>darkMode</InlineCode> со значением{" "}
        <InlineCode>&apos;class&apos;</InlineCode> в наш{" "}
        <InlineCode>tailwind.config.js</InlineCode> :
      </Paragraph>
      <Code
        language="javascript"
        code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  ...
  darkMode: 'class',
  ...
}`}
      />
      <Paragraph>
        Создадим компонент с кнопками для переключения темы по пути{" "}
        <InlineCode>src/components/ThemeToggle.tsx</InlineCode>
      </Paragraph>
      <Code
        language="tsx"
        code={`"use client";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex gap-2">
      <button
        className="bg-slate-400 py-2 px-4 rounded-md text-light-onSurface dark:text-dark-onSurface"
        type="button"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="bg-slate-400 py-2 px-4 rounded-md text-light-onSurface dark:text-dark-onSurface"
        type="button"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
    </div>
  );
};

export default ThemeToggle;`}
      />
      <Paragraph>
        Добавим компонент в наш <InlineCode>src/app/page.tsx</InlineCode>
      </Paragraph>
      <Code
        language="tsx"
        code={`import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-light-surface dark:bg-dark-surface">
      <h1 className="text-5xl text-light-onSurface dark:text-dark-onSurface">
        Работает!
      </h1>
      <p className="bg-light-primaryContainer dark:bg-dark-primaryContainer text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer">
        Этот текст находится на primary container
      </p>
      <ThemeToggle />
    </main>
  );
}
`}
      />
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
        <InlineLink href="https://m3.material.io/">
          официальном сайте
        </InlineLink>
        , чтоб понять основные принципы. После чего возвращайтесь сюда и
        продвигайтесь дальше по сайту.
      </Paragraph>
    </main>
  )
}

export default Intro
