import Display from "@/shared/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import Subheading from "@/components/Subheading"

import ImageWithText from "@/components/ImageWithText"
import InlineLink from "@/components/InlineLink"

import lightThemePic from "@/public/colors/surfaces/lightTheme.png"
import darkThemePic from "@/public/colors/surfaces/darkTheme.png"
import containerExamplePic from "@/public/colors/surfaces/containerExample.png"
import containerColorsPic from "@/public/colors/surfaces/containerColors.png"
import containerExample2Pic from "@/public/colors/surfaces/containerExample2.png"
import alternativeSurfaceLightPic from "@/public/colors/surfaces/alternativeSurfaceLight.png"
import alternativeSurfaceDarkPic from "@/public/colors/surfaces/alternativeSurfaceDark.png"
import onSurfaceColorsPic from "@/public/colors/surfaces/onSurfaceColors.png"

const Surfaces = () => {
  return (
    <div>
      <Display className="mb-4">Surface colors</Display>

      <div className="flex flex-col gap-2">
        <Paragraph>
          Цвета surface определяют содержащиеся в них области, отличая их от
          фона и других элементов экрана. Существует три основных вида surface
          ролей: surface dim, surface и surface bright. В дополнении есть 5
          ролей surface container: surface container lowest, surface container
          low, surface container, surface container high, и surface container
          highest. Подробнее о нюансах на{" "}
          <InlineLink href="https://shared.material.io/styles/color/the-color-system/color-roles">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <ImageWithText
          src={lightThemePic}
          alt="Light theme surface colors"
          width={600}
        >
          Диаграмма surface цветов для светлой темы
        </ImageWithText>
        <ImageWithText
          src={darkThemePic}
          alt="Dark theme surface colors"
          width={600}
        >
          Диаграмма surface цветов для тёмной темы
        </ImageWithText>

        <Heading>Surface container</Heading>
        <Paragraph>
          Surface container - это рекомендуемый цвет по умолчанию для замкнутой
          области по сравнению с цветом surface. Он обеспечивает хороший
          контраст и может гибко комбинироваться со всеми другими surface ролями
          с повышенным или пониженным акцентом.
        </Paragraph>
        <ImageWithText
          src={containerExamplePic}
          alt="Example using surface container color"
          width={600}
        >
          1. Surface <br />
          2. Surface container
        </ImageWithText>
        <Paragraph>
          В приведенном выше примере мобильное устройство использует surface для
          области тела и surface container для области навигации. Когда одно и
          то же приложение масштабируется на более крупное устройство, эти
          цветовые сопоставления остаются неизменными для их областей
          компоновки.
        </Paragraph>

        <Subheading>Цвета surface container</Subheading>
        <Paragraph>
          Роли surface container включают в себя пять цветов, варьирующихся от
          самого низкого до самого высокого выделения на фоне роли surface. Это
          позволяет гибко выбирать цвет, который обеспечивает больший или
          меньший контраст с поверхностью, или использовать несколько цветов
          вместе для создания вложенных областей хранения.
        </Paragraph>
        <ImageWithText
          src={containerColorsPic}
          alt="Range surface container color roles"
          width={600}
        >
          Диапазон цветовых ролей surface container позволяет дизайнерам
          добавлять функции для широкоэкранных версий интерфейса, не нарушая
          иерархии портативных устройств.
        </ImageWithText>
        <ImageWithText
          src={containerExample2Pic}
          alt="Example using different surface colors"
          width={600}
        >
          Пример одной и той же сборки интерфейса с использованием разных ролей
          цвета surface.
        </ImageWithText>

        <Subheading>Альтернативные цвета surface</Subheading>
        <Paragraph>
          Две дополнительные surface роли являются вариантами для стандартного
          surface. Surface Bright всегда будет самым ярким цветом поверхности
          как в темных, так и в светлых темах. Surface Dim всегда будет самым
          тусклым цветом поверхности в светлых или темных темах.
        </Paragraph>

        <ImageWithText
          src={alternativeSurfaceLightPic}
          alt="Surface dim, surface, and surface bright in light theme"
          width={600}
        >
          Surface dim, surface, и surface bright в светлой теме
        </ImageWithText>

        <ImageWithText
          src={alternativeSurfaceDarkPic}
          alt="Surface dim, surface, and surface bright in dark theme"
          width={600}
        >
          Surface dim, surface, и surface bright в тёмной теме
        </ImageWithText>

        <Heading>On surface цвета</Heading>
        <Paragraph>
          Surface color роль предназначена для нанесения на большие области
          хранения, такие как фон и поверхности контейнеров. Всякий раз, когда
          такие элементы, как текст или иконки, появляются на этих поверхностях,
          их цвета должны быть четкими и разборчивыми на фоне цвета за ними.
        </Paragraph>
        <Paragraph>
          Этот тип цвета называется &quot;on&quot; цветом, имея в виду тот факт,
          что он появляется поверх поверхностей. Цвета &quot;on&quot; в основном
          применяются к тексту, иконкам и границам.
        </Paragraph>

        <ImageWithText
          src={onSurfaceColorsPic}
          alt="On surface roles in light theme"
          width={600}
        >
          Цвета on surface в светлой теме
        </ImageWithText>
      </div>
    </div>
  )
}

export default Surfaces
