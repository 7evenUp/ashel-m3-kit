import Image from "next/image"

import Display from "@/shared/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import InlineLink from "@/components/InlineLink"
import ImageWithText from "@/components/ImageWithText"

import typeStylesPic from "@/public/typography/overview/type_styles.png"
import customTypefacesPic from "@/public/typography/overview/custom_typefaces.png"
import majorSecondScalefacesPic from "@/public/typography/overview/major_second_scale.png"
import reducedSetPic from "@/public/typography/overview/reduset_set.png"

const Typography = () => {
  return (
    <div>
      <Display className="mb-4">Typography Overview</Display>

      <div className="flex flex-col gap-2">
        <Heading>Пять ролей шрифта</Heading>
        <Paragraph>
          Material Design V3 определяет 5 ролей для шрифта: Display, headline,
          title, body и label. Эти роли носят более описательный характер,
          нежели прошлые версии Material Design, позволяя упростить применение в
          более широком диапазоне вариантов использования. Подробнее можно
          прочитать на{" "}
          <InlineLink href="https://shared.material.io/styles/typography/overview">
            официальном сайте Material Design V3
          </InlineLink>
        </Paragraph>
        <Image
          className="my-6 rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
          alt="Type styles"
          src={typeStylesPic}
          width={600}
        />
        <Heading>Стандартные шрифты</Heading>
        <Paragraph>
          Стандартным шрифтом в Material Design является{" "}
          <InlineLink href="https://fonts.google.com/specimen/Roboto">
            Roboto.
          </InlineLink>
        </Paragraph>

        <Paragraph>
          Roboto включает более 3300 глифов для обозначения сотен языков мира.
        </Paragraph>

        <Paragraph>
          Для гибкой настройки можно использовать переменный шрифт -{" "}
          <InlineLink href="https://fonts.google.com/specimen/Roboto+Flex">
            Roboto Flex
          </InlineLink>
          . В качестве шрифта с засечками используется{" "}
          <InlineLink href="https://fonts.google.com/specimen/Roboto+Serif">
            Roboto Serif.
          </InlineLink>
        </Paragraph>

        <Heading>Размерность шрифта</Heading>
        <Paragraph>
          Material Design предлагает комбинацию из 15 стилей, каждый из которых
          имеет своё значение и применение. Они назначаются в зависимости от
          использования (например, для отображения заголовка) и группируются в
          категории в зависимости от масштаба (например, большие или маленькие).
        </Paragraph>

        <Paragraph>
          По умолчанию, используется шрифт Roboto для всех компонентов title,
          body и label, создавая тем самым целостную типографику.
        </Paragraph>

        <ImageWithText
          src={customTypefacesPic}
          alt="Custom typefaces"
          width={400}
        >
          Креативность же можно проявить при использовании больших размеров
          (например, display или headline)
        </ImageWithText>

        <div className="flex gap-5">
          <ImageWithText
            src={majorSecondScalefacesPic}
            alt="Material's major font scales"
            width={400}
          >
            В Material Design используется шкала типа Major Second scale (1.125)
            с 14px в качестве основного размера. Это привязка к наиболее важному
            стилю, наиболее часто используемому для набора основного текста.
          </ImageWithText>
          <ImageWithText
            src={reducedSetPic}
            alt="Reduced set of type scales"
            width={400}
          >
            Вероятнее всего, для ваших нужд не обязательно использовать все 15
            стилей. В данном примере выбрано пять размеров, а остальные удалены
          </ImageWithText>
        </div>
      </div>
    </div>
  )
}

export default Typography
