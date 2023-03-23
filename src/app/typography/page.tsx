import Body from "@/components/ui/text/Body";
import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Image from "next/image";
import typeStylesPic from "../../../public/typography/overview/type_styles.png";
import customTypefacesPic from "../../../public/typography/overview/custom_typefaces.png";
import majorSecondScalefacesPic from "../../../public/typography/overview/major_second_scale.png";
import reducedSetPic from "../../../public/typography/overview/reduset_set.png";

const Typography = () => {
  return (
    <div>
      <Display className="mb-4">Typography Overview</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2" size={"small"}>
          Пять стилей шрифта
        </Headline>
        <Body size={"large"} className="max-w-prose">
          Material Design V3 определяет 5 ролей для шрифта: Display, headline,
          title, body и label. Эти роли носят более описательный характер,
          позволяя упростить применение в более широком диапазоне вариантов
          использования.
        </Body>
        <Image
          className="max-w-[800px] my-6 rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
          alt="Type styles"
          src={typeStylesPic}
        />
        <Headline className="mt-4 mb-2" size={"small"}>
          Стандартные шрифты
        </Headline>
        <Body size={"large"} className="max-w-prose">
          Стандартным шрифтом в Material Design является Roboto.
        </Body>

        <Body size={"large"} className="max-w-prose">
          Roboto включает более 3300 глифов для обозначения сотен языков мира.
        </Body>

        <Body size={"large"} className="max-w-prose">
          Для гибкой настройки можно использовать переменный шрифт - Roboto
          Flex. В качестве шрифта с засечками используется Roboto Serif.
        </Body>

        <Headline className="mt-4 mb-2" size={"small"}>
          Размерность шрифта
        </Headline>
        <Body size={"large"} className="max-w-prose">
          Material Design предлагает комбинацию из 15 стилей, каждый из которых
          имеет своё значение и применение. Они назначаются в зависимости от
          использования (например, для отображения заголовка) и группируются в
          категории в зависимости от масштаба (например, большие или маленькие).
        </Body>

        <Body size={"large"} className="max-w-prose">
          По умолчанию, используется шрифт Roboto для всех компонентов title,
          body и label, создавая тем самым целостную типографику.
        </Body>

        <div className="flex flex-col gap-2 my-6 w-fit">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Custom typefaces"
            src={customTypefacesPic}
            width={400}
          />
          <Body size={"small"} className="max-w-[400px] px-2">
            Креативность же можно проявить при использовании больших размеров
            (например, display или headline)
          </Body>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Material's major font scales"
              src={majorSecondScalefacesPic}
              width={400}
            />
            <Body size={"small"} className="max-w-[400px] px-2">
              В Material Design используется шкала типа Major Second scale
              (1.125) с 14px в качестве основного размера. Это привязка к
              наиболее важному стилю, наиболее часто используемому для набора
              основного текста.
            </Body>
          </div>
          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Reduced set of type scales"
              src={reducedSetPic}
              width={400}
            />
            <Body size={"small"} className="max-w-[400px] px-2">
              Вероятнее всего, для ваших нужд не обязательно использовать все 15
              стилей. В данном примере выбрано пять размеров, а остальные
              удалены
            </Body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
