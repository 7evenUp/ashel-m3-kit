
import Heading from "@/components/Heading"
import InlineLink from "@/components/InlineLink"
import InternalLink from "@/components/InternalLink"
import MenuExample from "@/components/MenuExample"
import Paragraph from "@/components/Paragraph"
import Display from "@/components/ui/text/Display"


const MenusPage = () => {
  return (
    <div>
      <Display className="mb-4">Menus</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
          Меню отображают список вариантов на временной поверхности.
        </Paragraph>
        <Paragraph>
          Меню появляется, когда пользователи взаимодействуют с кнопкой,
          действием или другим элементом управления.
        </Paragraph>
        <Paragraph>
          Они могут быть открыты с помощью различных элементов, чаще всего это{" "}
          <InternalLink href="/components/icon-buttons">
            Icon Buttons
          </InternalLink>
          ,{" "}
          <InternalLink href="/components/common-buttons">Buttons</InternalLink>{" "}
          и{" "}
          <InternalLink href="/components/filled-text-field">
            Text Fields
          </InternalLink>
          .
        </Paragraph>

        <Heading>Примеры</Heading>
        <MenuExample />
      </div>
    </div>
  )
}

export default MenusPage
