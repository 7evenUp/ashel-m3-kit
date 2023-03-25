import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Body from "@/components/ui/text/Body";
import Image from "next/image";
import thirteenTonesPic from "../../../../public/colors/color-roles/thirteen_tones.png";
import tonesToRolesPic from "../../../../public/colors/color-roles/tones_to_roles.png";
import lightThemePic from "../../../../public/colors/color-roles/light_theme.png";
import darkThemePic from "../../../../public/colors/color-roles/dark_theme.png";
import primaryExamplePic from "../../../../public/colors/color-roles/primaryExample.png";
import primaryContainerExamplePic from "../../../../public/colors/color-roles/primaryContainerExample.png";
import secondaryContainerExamplePic from "../../../../public/colors/color-roles/secondaryContainerExample.png";
import tertiaryContainerExamplePic from "../../../../public/colors/color-roles/tertiaryContainerExample.png";
import Title from "@/components/ui/text/Title";
import InlineLink from "@/components/InlineLink";

const ColorRoles = () => {
  return (
    <div>
      <Display className="mb-4">Цветовые роли</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2">
          Один ключевой цвет становится тринадцатью тонами
        </Headline>
        <Body size={"large"} className="max-w-prose">
          Тональная палитра состоит из тринадцати тонов, включая белый и черный.
          Значение тона 100 эквивалентно идее максимального света и приводит к
          белому цвету. Каждое значение тона от 0 до 100 выражает количество
          света, присутствующего в цвете.
        </Body>
        <div className="flex flex-col gap-2 my-6 w-fit">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="The tonal value of each color is expressed with the number associated with that role, e.g. primary40 is the primary key color at a tone value of 40"
            src={thirteenTonesPic}
            width={700}
          />
          <Body size={"small"} className="max-w-[700px] px-2">
            Тональное значение каждого цвета выражается числом, связанным с этой
            ролью, например. primary40 — цвет primary со значением тона 40.
          </Body>
        </div>
        <Body size={"large"} className="max-w-prose">
          В то время как ключевые цвета являются основой для тональных палитр, в
          UI используется только набор из тринадцати цветов из каждой тональной
          палитры. Схема - это группа тонов, назначенных определенным ролям,
          которые сопоставляются компонентам.
        </Body>
        <Headline className="mt-4 mb-2">Роли в схеме</Headline>
        <Image
          className="my-6 rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
          alt="Tones according to roles"
          src={tonesToRolesPic}
          width={700}
        />
        <Body size={"large"} className="max-w-prose">
          Каждый ключевой цвет акцента (primary, secondary и tertiary)
          представлен в виде группы из 4 совместимых цветов с разными тонами,
          которые можно применять для разного акцента и визуальной
          выразительности, а также сочетать для визуального контраста.
        </Body>
        <Body size={"large"} className="max-w-prose">
          Когда создается цветовая схема, тональные палитры также включают
          сопоставления для темной темы. Приложения получают светлые и темные
          тона с помощью единой сгенерированной схемы.
        </Body>

        <div className="flex flex-col gap-2 my-6 w-fit">
          <Image
            className="max-w-[700px] rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="From five key colors, roles are automatically assigned roles that map to light theme components"
            src={lightThemePic}
            quality={100}
          />
          <Body size={"small"} className="max-w-[700px] px-2">
            Из пяти ключевых цветов автоматически назначаются роли,
            соответствующие компонентам светлой темы
          </Body>
        </div>

        <div className="flex flex-col gap-2 my-6 w-fit">
          <Image
            className="max-w-[700px] rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="From five key colors, roles are automatically assigned roles that map to dark theme components"
            src={darkThemePic}
            quality={100}
          />
          <Body size={"small"} className="max-w-[700px] px-2">
            Из пяти ключевых цветов автоматически назначаются роли,
            соответствующие компонентам темной темы
          </Body>
        </div>

        <Headline className="mt-4 mb-2">Акцентные цвета</Headline>

        <Title size="large" className="mt-3 mb-2">
          Primary
        </Title>
        <Body size={"large"} className="max-w-prose">
          Primary используются для ключевых компонентов пользовательского
          интерфейса, таких как FAB, выступающие кнопки, активные состояния, а
          также оттенок приподнятых поверхностей.
        </Body>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Primary example"
              src={primaryExamplePic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              1. On-primary <br />
              2. Primary
            </Body>
          </div>

          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Primary container example"
              src={primaryContainerExamplePic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              3. On-primary container <br />
              4. Primary container
            </Body>
          </div>
        </div>
        <Title size="large" className="mt-3 mb-2">
            Secondary
          </Title>
          <Body size={"large"} className="max-w-prose">
            Secondary цвета используются для менее заметных компонентов
            пользовательского интерфейса, таких как{" "}
            <InlineLink href="#">chips</InlineLink>, расширяя при этом
            возможности цветового выражения.
          </Body>
          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="max-w-[700px] rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Secondary container example"
              src={secondaryContainerExamplePic}
              width={700}
            />
            <Body size={"small"} className="max-w-[700px] px-2">
              1. Иконка: on-Secondary container <br />
              2. Secondary container
            </Body>
          </div>

          <Title size="large" className="mt-3 mb-2">
            Tertiary
          </Title>
          <Body size={"large"} className="max-w-prose">
            Tertiary цвета используются для контрастных акцентов, которые могут
            быть использованы для баланса primary и secondary цветов или
            привлечения повышенного внимания к элементу, такому как{" "}
            <InlineLink href="#">input field</InlineLink>.
          </Body>
          <Body size={"large"} className="max-w-prose">
            Роль tertiary цвета оставлена на ваше усмотрение - можете
            использовать его по своему усмотрению, и предназначена для поддержки
            более широкого цветового выражения в продуктах.
          </Body>
          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="max-w-[700px] rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Tertiary container example"
              src={tertiaryContainerExamplePic}
              width={700}
            />
            <Body size={"small"} className="max-w-[700px] px-2">
              1. On-tertiary container <br />
              2. Tertiary container
            </Body>
          </div>
      </div>
    </div>
  );
};

export default ColorRoles;
