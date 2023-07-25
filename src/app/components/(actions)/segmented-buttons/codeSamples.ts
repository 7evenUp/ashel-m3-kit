export const usageCodeSingle = `import { SegmentedButton, SegmentedRoot } from "@/components/ui/SegmentedButton"
import { useState } from "react"
...
const [state, setState] = useState("usd")
...
<SegmentedRoot
  className="w-[500px]"
  type="single"
  value={state}
  onValueChange={(value) => value && setState(value)}
>
  <SegmentedButton
    name="currency"
    value="try"
  >
    Лира
  </SegmentedButton>
  <SegmentedButton
    name="currency"
    value="usd"
  >
    Доллары
  </SegmentedButton>
  <SegmentedButton
    name="currency"
    value="cny"
  >
    Юань
  </SegmentedButton>
</SegmentedRoot>`

export const usageCodeMultiple = `import { SegmentedButton, SegmentedRoot } from "@/components/ui/SegmentedButton"
...
<SegmentedRoot
  className="w-[500px]"
  type="multiple"
  defaultValue={["english", "german"]}
>
  <SegmentedButton name="language" value="english">
    Английский
  </SegmentedButton>
  <SegmentedButton name="language" value="spanish">
    Испанский
  </SegmentedButton>
  <SegmentedButton name="language" value="german">
    Немецкий
  </SegmentedButton>
  <SegmentedButton name="language" value="french">
    Французский
  </SegmentedButton>
</SegmentedRoot>`

export const usageIcons = `import { List, ViewGrid } from "iconoir-react"
...
<SegmentedRoot type="single" defaultValue="grid">
  <SegmentedButton
    value="grid"
    icon={<ViewGrid width={18} height={18} />}
  >
    Grid
  </SegmentedButton>
  <SegmentedButton
    value="list"
    icon={<List width={18} height={18} />}
  >
    List
  </SegmentedButton>
</SegmentedRoot>`

export const usageDensity = `// Density 0 уровня (по умолчанию)
<SegmentedRoot type="single" defaultValue="1">
  <SegmentedButton value="1">1</SegmentedButton>
  <SegmentedButton value="2">2</SegmentedButton>
  <SegmentedButton value="3">3</SegmentedButton>
</SegmentedRoot>
// Density -1 уровня
<SegmentedRoot type="single" defaultValue="1" density="-1">
  <SegmentedButton value="1">1</SegmentedButton>
  <SegmentedButton value="2">2</SegmentedButton>
  <SegmentedButton value="3">3</SegmentedButton>
</SegmentedRoot>
// Density -2 уровня
<SegmentedRoot type="single" defaultValue="1" density="-2">
  <SegmentedButton value="1">1</SegmentedButton>
  <SegmentedButton value="2">2</SegmentedButton>
  <SegmentedButton value="3">3</SegmentedButton>
</SegmentedRoot>
// Density -3 уровня
<SegmentedRoot type="single" defaultValue="1" density="-3">
  <SegmentedButton value="1">1</SegmentedButton>
  <SegmentedButton value="2">2</SegmentedButton>
  <SegmentedButton value="3">3</SegmentedButton>
</SegmentedRoot>`