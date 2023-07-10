export const usageCode = `import { Minus, Plus } from "iconoir-react"
...
<Label size="large" className="mt-3 mb-2">
  Без иконок
</Label>
<Switch
  selected={isSelected}
  onChange={() => setIsSelected(!isSelected)}
/>

<Label size="large" className="mt-3 mb-2">
  С иконкой в состоянии selected
</Label>
<Switch
  selected={isSelected}
  onChange={() => setIsSelected(!isSelected)}
  icon={<Plus />}
/>

<Label size="large" className="mt-3 mb-2">
  С иконками в обоих состояниях
</Label>
<Switch
  selected={isSelected}
  onChange={() => setIsSelected(!isSelected)}
  icon={<Plus />}
  unselectedIcon={<Minus />}
/>`