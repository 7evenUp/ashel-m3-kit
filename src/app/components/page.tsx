import Display from "@/shared/typography/Display"

import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"

import InternalLink from "@/components/InternalLink"

const Components = () => {
  return (
    <div>
      <Display className="mb-4">Components Overview</Display>

      <div className="flex flex-col gap-2">
        <Paragraph>
          Компоненты - это интерактивные строительные блоки для создания
          пользовательского интерфейса. Их можно разделить на пять категорий в
          зависимости от их назначения: action, containment, navigation,
          selection и text input.
        </Paragraph>
        <Heading>Задокументированные компоненты</Heading>
        <Paragraph>Текущий список задокументированных компонентов:</Paragraph>
        <InternalLink href="components/common-buttons">
          Common buttons
        </InternalLink>
        <InternalLink href="components/icon-buttons">Icon buttons</InternalLink>
        <InternalLink href="components/segmented-buttons">
          Segmented buttons
        </InternalLink>
        <InternalLink href="components/cards">Cards</InternalLink>
        <InternalLink href="components/dialogs">Dialog</InternalLink>
        <InternalLink href="components/tabs">Tabs</InternalLink>
        <InternalLink href="components/checkbox">Checkbox</InternalLink>
        <InternalLink href="components/radio-button">Radio button</InternalLink>
        <InternalLink href="components/switch">Switch</InternalLink>
        <InternalLink href="components/sliders">Slider</InternalLink>
      </div>
    </div>
  )
}

export default Components
