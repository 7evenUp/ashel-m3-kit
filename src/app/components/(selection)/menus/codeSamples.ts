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

export const usageSubCode = `<MenuRoot>
  <MenuTrigger>
    <IconButton icon={<Menu />} appearance="tonal" />
  </MenuTrigger>
  <MenuPortal>
    <MenuContent className="w-[200px]">
      <MenuItem>Изменить</MenuItem>
      <MenuItem>Удалить</MenuItem>
      <MenuSeparator />
      <MenuSub>
        <MenuSubTrigger>Настройки</MenuSubTrigger>
        <MenuPortal>
          <MenuSubContent className="w-[200px]">
            <MenuItem trailing="+">Увеличить</MenuItem>
            <MenuItem trailing="-">Уменьшить</MenuItem>
            <MenuItem>В исходное состояние</MenuItem>
          </MenuSubContent>
        </MenuPortal>
      </MenuSub>
    </MenuContent>
  </MenuPortal>
</MenuRoot>`