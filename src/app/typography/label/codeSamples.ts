export const usage = `import Label from "@/components/typography/Label"

{/* Большой */}
<Label size="large">Label large</Label>
{/* Средний */}
<Label size="medium">Label medium</Label>
{/* или без указания size (medium по умолчанию) */}
<Label>Label medium</Label>
{/* Маленький */}
<Label size="small">Label small</Label>`

export const custom = `<Label className="text-red-400 dark:text-red-400">
  (R)ed
</Label>
<Label className="text-green-400 dark:text-green-400">
  (G)reen
</Label>
<Label className="text-blue-400 dark:text-blue-400">
  (B)lue
</Label>`