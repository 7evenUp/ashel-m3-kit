export const usageAssist = `import AssistChip from "@/shared/ui/Chips/AssistChip""
...
// Без иконки | стиль elevated
<AssistChip appearance="elevated">Elevated</AssistChip>
// Без иконки | стиль outlined
<AssistChip appearance="outlined">Outlined</AssistChip>
// С иконкой | стиль elevated
<AssistChip
  appearance="elevated"
  icon={<Calendar width={18} height={18} />}
>
  Elevated
</AssistChip>
// С иконкой | стиль outlined
<AssistChip
  appearance="outlined"
  icon={<Calendar width={18} height={18} />}
>
  Outlined
</AssistChip>`

export const usageFilter = `import { Calendar, NavArrowDown } from "iconoir-react"
import FilterChip from "@/shared/ui/Chips/FilterChip"
...
const [state, setState] = useState(false)
...
// Без иконки | Elevated
<FilterChip
  appearance="elevated"
  pressed={state}
  onPressedChange={setState}
>
  Elevated
</FilterChip>
// Без иконки | Outlined
<FilterChip
  appearance="outlined"
  pressed={state}
  onPressedChange={setState}
>
  Outlined
</FilterChip>
// С иконкой в начале | Elevated
<FilterChip
  appearance="elevated"
  leadingIcon={<Calendar width={18} height={18} />}
  pressed={state}
  onPressedChange={setState}
>
  Elevated
</FilterChip>
// С иконкой в начале | Outlined
<FilterChip
  appearance="outlined"
  leadingIcon={<Calendar width={18} height={18} />}
  pressed={state}
  onPressedChange={setState}
>
  Outlined
</FilterChip>
// С иконкой в конце | Elevated
<FilterChip
  appearance="elevated"
  trailingIcon={<NavArrowDown width={18} height={18} />}
  pressed={state}
  onPressedChange={setState}
>
  Elevated
</FilterChip>
// С иконкой в конце | Outlined
<FilterChip
  appearance="outlined"
  trailingIcon={<NavArrowDown width={18} height={18} />}
  pressed={state}
  onPressedChange={setState}
>
  Outlined
</FilterChip>
// Обе иконки | Elevated
<FilterChip
  appearance="elevated"
  leadingIcon={<Calendar width={18} height={18} />}
  trailingIcon={<NavArrowDown width={18} height={18} />}
  pressed={state}
  onPressedChange={setState}
>
  Elevated
</FilterChip>
// Обе иконки | Outlined
<FilterChip
  appearance="outlined"
  leadingIcon={<Calendar width={18} height={18} />}
  trailingIcon={<NavArrowDown width={18} height={18} />}
  pressed={state}
  onPressedChange={setState}
>
  Outlined
</FilterChip>`

export const usageInput = `// Без иконки
<InputChip>Input chip</InputChip>
// С иконкой спереди
<InputChip leadingIcon={<MediaImage width={18} height={18} />}>
  Type: images
</InputChip>
// С иконкой в конце
<InputChip trailingIcon={<Cancel width={18} height={18} />}>
  {"<$100"}
</InputChip>
// Обе иконки
<InputChip
  leadingIcon={<Calendar width={18} height={18} />}
  trailingIcon={<Cancel width={18} height={18} />}
>
  Wed, 26.07
</InputChip>
// С аватаркой
<InputChip avatar={<ProfileCircle />}
  Jack Siemens
</InputChip>
// Аватарка + иконка в конце
<InputChip
  avatar={<ProfileCircle />}
  trailingIcon={<Cancel width={18} height={18} />}
>
  Mohammad
</InputChip>`