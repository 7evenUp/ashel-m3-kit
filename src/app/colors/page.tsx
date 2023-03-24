import Body from "@/components/ui/text/Body";
import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Image from "next/image";
import keyColorsPic from "../../../public/colors/overview/key_colors.png";
import neutralColorsPic from "../../../public/colors/overview/neutral_colors.png";
import InlineLink from "@/components/InlineLink";

const Colors = () => {
  return (
    <div>
      <Display className="mb-4">Colors Overview</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2">Accent цвета</Headline>

        <Body size={"large"} className="max-w-prose">
          Цвет primary используется для определения ролей ключевых компонентов
          UI, таких как{" "}
          <InlineLink href="#" target="_blank">
            FAB
          </InlineLink>
          , кнопок, активных состояний, а также оттенок приподнятых
          поверхностей.
        </Body>

        <Body size={"large"} className="max-w-prose">
          Цвет secondary используется для менее заметных компонентов в UI, таких
          как{" "}
          <InlineLink href="#" target="_blank">
            chips
          </InlineLink>
          , расширяя при этом возможности для цветового выражения.
        </Body>
        <Body size={"large"} className="max-w-prose">
          Цвет tertiary используется для контрастных акцентов, которые можно
          использовать для баланса primary и secondary цветов или для
          привлечения повышенного внимания к элементу. Роль цвета tertiary
          оставлена ​​на ваше усмотрение и предназначена для поддержки более
          широкого цветового выражения в продуктах.
        </Body>
        <Image
          className="my-6 rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
          alt="Accent colors"
          src={keyColorsPic}
          width={700}
        />

        <Headline className="mt-4 mb-2">Neutral цвета</Headline>
        <Body size={"large"} className="max-w-prose">
          Neutral цвет используется для получения поверхностных цветов для фона,
          а также цветов, используемых для элементов главного выделения, таких
          как текст, иконки.
        </Body>
        <Body size={"large"} className="max-w-prose">
          Neutral variant цвет используется для получения цветовых ролей для
          элементов среднего выделения, таких как текст, иконки и контуры
          компонентов.
        </Body>
        <Image
          className="my-6 rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
          alt="Neutral colors"
          src={neutralColorsPic}
          width={700}
        />
      </div>
    </div>
  );
};

export default Colors;
