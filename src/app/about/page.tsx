import Display from "@/shared/typography/Display"

import Paragraph from "@/components/Paragraph"

export const metadata = {
  title: "Ashel UI Kit | About",
  description:
    "About the Material Design V3, why I started this project and goals I want to reach",
}

const About = () => {
  return (
    <main className="p-10 flex flex-col gap-3">
      <Display>Мотивация</Display>
      <Paragraph>
        Я начал работать над этим проектом для прокачки собственных скилов в
        построении переиспользуемых UI компонентов и для лучшего понимания
        архитектуры UI библиотек.
      </Paragraph>
      <Paragraph>
        Так как нет официальной разработки UI компонентов для дизайн системы M3
        от Google, я решил сделать это сам в рамках обучения.
      </Paragraph>
      <Paragraph>
        В секции typography можете прочитать про стандартные шрифты и размеры
        шрифтов, использующихся в дизайн системе. Там же сможете найти готовые к
        использованию компоненты.
      </Paragraph>
      <Paragraph>
        В секции colors можете прочитать о цветовых палитрах в дизайн системе и
        их ролях. Также рассмотрено, как добавить цвета в ваш проект, набор
        заготовленных цветовых тем.
      </Paragraph>
      <Paragraph>
        В секции components можете найти информацию о тех самых UI компонентах
        вроде кнопки, чекбокса, текстового поля, реализованных по стайл гайдам
        M3.
      </Paragraph>
    </main>
  )
}

export default About
