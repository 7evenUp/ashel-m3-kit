export const usageCode = `import IconButton from "@/components/ui/IconButton"
import ToggledIconButton from "@/components/ui/ToggledIconButton"
import { Heart } from "iconoir-react"
...
<IconButton appearance={"filled"} icon={<Heart />} />
<ToggledIconButton appearance="filled">
  <Heart />
</ToggledIconButton>`

export const usageCustomCode = `<ToggledIconButton appearance="filled" defaultPressed>
  <Heart />
</ToggledIconButton>
...
<ToggledIconButton appearance="filled" defaultPressed>
  <Heart className="group-data-[state=on]:fill-light-onPrimary dark:group-data-[state=on]:fill-dark-onPrimary" />
</ToggledIconButton>
`
