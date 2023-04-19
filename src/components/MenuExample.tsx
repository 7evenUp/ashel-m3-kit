'use client'

import Button from "@/lib/Button"
import {
  MenuContent,
  MenuItem,
  MenuPortal,
  MenuRoot,
  MenuTrigger,
} from "@/lib/Menu"

const MenuExample = () => {
  return (
    <MenuRoot>
      <MenuTrigger>
        <Button appearance={"tonal"}>Trigger the menu</Button>
      </MenuTrigger>
      <MenuPortal>
        <MenuContent>
          <MenuItem>First item</MenuItem>
          <MenuItem onSelect={(event) => event.preventDefault()}>Second item</MenuItem>
          <MenuItem>Third item</MenuItem>
          <MenuItem disabled>Disabled item</MenuItem>
          <MenuItem>Forth item</MenuItem>
        </MenuContent>
      </MenuPortal>
    </MenuRoot>
  )
}

export default MenuExample
