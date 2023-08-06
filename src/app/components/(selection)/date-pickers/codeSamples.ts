export const usageSimpleCode = `<MenuRoot>
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
</MenuRoot>`