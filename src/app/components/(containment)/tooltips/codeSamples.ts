export const usagePlain = `
// Tooltip для кнопок
<PlainTooltip content="Это обычный tooltip">
  <Button appearance="tonal">Показать tooltip</Button>
</PlainTooltip>
<PlainTooltip content="Скопировать">
  <IconButton appearance="tonal" icon={<Copy />} />
</PlainTooltip>
...
// Tooltip для текста
<p> Наведи {" "}
  <PlainTooltip
    content="Отступ для текста - 8px, вместо 4px для кнопок"
    sideOffset={8}
    triggerAsChild={false}
  >
    <span className="font-medium">сюда</span>
  </PlainTooltip>{" "}
  чтобы увидеть подсказку
</p>`

export const usageRich = `<RichTooltip
  subhead="Добавить знакомых"
  supportingText="Поделитесь коллекцией со своими друзьями и знакомыми. Люди, которых вы добавите в этот альбом, так же будут иметь право добавлять и удалять медиа."
  action={<Button appearance="text">Узнать больше</Button>}
  >
  <IconButton appearance="tonal" icon={<AddUser />} />
</RichTooltip>`