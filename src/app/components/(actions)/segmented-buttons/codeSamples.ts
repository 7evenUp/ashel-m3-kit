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