import Image from "next/image"

import Heading from "@/components/Heading"
import InlineCode from "@/components/InlineCode"
import Paragraph from "@/components/Paragraph"

import Display from "@/shared/typography/Display"

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

const Themes = () => {
  return (
    <div>
      <Display className="mb-4">Themes</Display>

      <div className="flex flex-col gap-2">
        <Paragraph>
          В данном разделе я подготовил для вас набор готовых цветовых палитр.
          Вам остаётся лишь выбрать понравившуюся и скопировать значения цветов
          в свой <InlineCode>tailwind.config.js</InlineCode> файл.
        </Paragraph>

        <Heading>Cyan (Бирюзовый)</Heading>
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

        <Heading>Green (Зелёный)</Heading>
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

        <Heading>Purple (Фиолетовый)</Heading>
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

        <Heading>Corral (Коралловый)</Heading>
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

        <Heading>Yellow (Жёлтый)</Heading>
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
