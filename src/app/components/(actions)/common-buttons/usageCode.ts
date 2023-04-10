export const usageCode = `{/* elevated */}
<Button appearance='elevated'>Elevated button</Button>
{/* filled */}
<Button appearance='filled'>Filled button</Button>
{/* disabled tonal */}
<Button appearance='tonal' disabled>Tonal button</Button>
{/* with onClick */}
<Button appearance='outlined' onClick={() => {}}>Outlined button</Button>
{/* button type (submit by default as regular html) */}
<Button appearance='text' type="button">Text button</Button>`

export const usageWithIconsCode = `import { Plus } from "iconoir-react"
...
<Button appearance="filled" icon={<Plus />}>
  Filled
</Button>`