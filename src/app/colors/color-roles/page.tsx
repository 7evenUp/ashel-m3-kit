import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Body from "@/components/ui/text/Body";
import Image from "next/image";
import thirteenTonesPic from "../../../../public/colors/color-roles/thirteen_tones.png";
import tonesToRolesPic from "../../../../public/colors/color-roles/tones_to_roles.png";
import lightThemePic from "../../../../public/colors/color-roles/light_theme.png";
import darkThemePic from "../../../../public/colors/color-roles/dark_theme.png";

const TitlePage = () => {
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

      </div>
    </div>
  );
};

export default TitlePage;
