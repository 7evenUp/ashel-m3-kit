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
          пользовательского интерфейса. Их можно разделить на шесть категорий в
          зависимости от их назначения: action, containment, navigation,
          communication selection и text input.
        </Paragraph>
        <Heading>Actions</Heading>
        <InternalLink href="components/common-buttons">
          Common buttons
        </InternalLink>
        <InternalLink href="components/icon-buttons">Icon buttons</InternalLink>
        <InternalLink href="components/segmented-buttons">
          Segmented buttons
        </InternalLink>

        <Heading>Communication</Heading>
        <InternalLink href="components/badges">Badges</InternalLink>
        <InternalLink href="components/snackbar">Snackbar</InternalLink>

        <Heading>Containment</Heading>
        <InternalLink href="components/cards">Cards</InternalLink>
        <InternalLink href="components/dialogs">Dialogs</InternalLink>
        <InternalLink href="components/popover">Popover</InternalLink>
        <InternalLink href="components/side-sheets">Side Sheets</InternalLink>
        <InternalLink href="components/tooltips">Tooltips</InternalLink>

        <Heading>Navigation</Heading>
        <InternalLink href="components/tabs">Tabs</InternalLink>

        <Heading>Selection</Heading>
        <InternalLink href="components/checkbox">Checkbox</InternalLink>
        <InternalLink href="components/chips">Chips</InternalLink>
        <InternalLink href="components/menus">Menus</InternalLink>
        <InternalLink href="components/radio-button">Radio button</InternalLink>
        <InternalLink href="components/sliders">Sliders</InternalLink>
        <InternalLink href="components/switch">Switch</InternalLink>

        <Heading>Text inputs</Heading>
        <InternalLink href="components/filled-text-field">
          Filled Text Fields
        </InternalLink>
        <InternalLink href="components/outlined-text-field">
          Outlined Text Fields
        </InternalLink>
      </div>
    </div>
  )
}

export default Components
