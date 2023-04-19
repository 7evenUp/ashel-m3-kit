"use client"

import Button from "@/lib/Button"
import IconButton from "@/lib/IconButton"
import {
  MenuContent,
  MenuItem,
  MenuPortal,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "@/lib/Menu"
import { Check, Menu, Plus } from "iconoir-react"

const MenuExampleWithButton = () => (
  <MenuRoot>
    <MenuTrigger>
      <Button appearance={"tonal"}>Trigger the menu</Button>
    </MenuTrigger>
    <MenuPortal>
      <MenuContent>
        <MenuItem leading={<Plus />}>With leading icon</MenuItem>
        <MenuItem trailing="⌘+B" className="pl-12">
          With trailing text
        </MenuItem>
        <MenuItem trailing={<Check />} className="pl-12">
          With trailing icon
        </MenuItem>
        <MenuItem leading={<Plus />} trailing={<Check />}>
          With both
        </MenuItem>
        <MenuItem leading={<Plus />} trailing="⌘+B">
          With both
        </MenuItem>
        <MenuSeparator />
        <MenuItem disabled>Disabled item</MenuItem>
      </MenuContent>
    </MenuPortal>
  </MenuRoot>
)

const MenuExampleWithIconButton = () => (
  <MenuRoot>
    <MenuTrigger>
      <IconButton icon={<Menu />} appearance="tonal" />
    </MenuTrigger>
    <MenuPortal>
      <MenuContent>
        <MenuItem>Изменить</MenuItem>
        <MenuItem>Удалить</MenuItem>
        <MenuSeparator />
        <MenuItem>Настройки</MenuItem>
      </MenuContent>
    </MenuPortal>
  </MenuRoot>
)

export { MenuExampleWithButton, MenuExampleWithIconButton }
