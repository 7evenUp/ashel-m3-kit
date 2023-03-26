import Heading from "@/components/Heading";
import InlineLink from "@/components/InlineLink";
import Paragraph from "@/components/Paragraph";
import Subheading from "@/components/Subheading";
import Body from "@/components/ui/text/Body";
import Display from "@/components/ui/text/Display";
import darkThemePic from "@/public/colors/color-roles/dark_theme.png";
import lightThemePic from "@/public/colors/color-roles/light_theme.png";
import primaryContainerExamplePic from "@/public/colors/color-roles/primaryContainerExample.png";
import primaryExamplePic from "@/public/colors/color-roles/primaryExample.png";
import secondaryContainerExamplePic from "@/public/colors/color-roles/secondaryContainerExample.png";
import tertiaryContainerExamplePic from "@/public/colors/color-roles/tertiaryContainerExample.png";
import thirteenTonesPic from "@/public/colors/color-roles/thirteen_tones.png";
import tonesToRolesPic from "@/public/colors/color-roles/tones_to_roles.png";
import Image from "next/image";

const ColorRoles = () => {
  return (
    <div>
      <Display className="mb-4">Цветовые роли</Display>

      <div className="flex flex-col gap-2">
        <Heading>Один ключевой цвет становится тринадцатью тонами</Heading>
        <Paragraph>
          Тональная палитра состоит из тринадцати тонов, включая белый и черный.
          Значение тона 100 эквивалентно идее максимального света и приводит к
          белому цвету. Каждое значение тона от 0 до 100 выражает количество
          света, присутствующего в цвете.
        </Paragraph>
        <div className="flex flex-col gap-2 my-6 w-fit">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Thirteen Tones of color"
            src={thirteenTonesPic}
            width={700}
          />
          <Body size={"small"} className="max-w-[700px] px-2">
            Тональное значение каждого цвета выражается числом, связанным с этой
            ролью, например. primary40 — цвет primary со значением тона 40.
          </Body>
        </div>
        <Paragraph>
          В то время как ключевые цвета являются основой для тональных палитр, в
          UI используется только набор из тринадцати цветов из каждой тональной
          палитры. Схема - это группа тонов, назначенных определенным ролям,
          которые сопоставляются компонентам.
        </Paragraph>
        <Heading>Роли в схеме</Heading>
        <Image
          className="my-6 rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
          alt="Tones according to roles"
          src={tonesToRolesPic}
          width={700}
        />
        <Paragraph>
          Каждый ключевой цвет акцента (primary, secondary и tertiary)
          представлен в виде группы из 4 совместимых цветов с разными тонами,
          которые можно применять для разного акцента и визуальной
          выразительности, а также сочетать для визуального контраста.
        </Paragraph>

        <Paragraph>
          Когда создается цветовая схема, тональные палитры также включают
          сопоставления для темной темы. Приложения получают светлые и темные
          тона с помощью единой сгенерированной схемы.
        </Paragraph>

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

        <Heading>Акцентные цвета</Heading>

        <Subheading>Primary</Subheading>
        <Paragraph>
          Primary используются для ключевых компонентов пользовательского
          интерфейса, таких как FAB, выступающие кнопки, активные состояния, а
          также оттенок приподнятых поверхностей.
        </Paragraph>
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
        <Subheading>Secondary</Subheading>
        <Paragraph>
          Secondary цвета используются для менее заметных компонентов
          пользовательского интерфейса, таких как{" "}
          <InlineLink href="#">chips</InlineLink>, расширяя при этом возможности
          цветового выражения.
        </Paragraph>
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

        <Subheading>Tertiary</Subheading>
        <Paragraph>
          Tertiary цвета используются для контрастных акцентов, которые могут
          быть использованы для баланса primary и secondary цветов или
          привлечения повышенного внимания к элементу, такому как{" "}
          <InlineLink href="#">input field</InlineLink>.
        </Paragraph>
        <Paragraph>
          Роль tertiary цвета оставлена на ваше усмотрение - можете использовать
          его по своему усмотрению, и предназначена для поддержки более широкого
          цветового выражения в продуктах.
        </Paragraph>
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
