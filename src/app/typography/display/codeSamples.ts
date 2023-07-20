export const usage = `import Display from "@/components/typography/Display"

{/* Большой */}
<Display size="large">Display large</Display>
{/* Средний */}
<Display size="medium">Display medium</Display>
{/* или без указания size (medium по умолчанию) */}
<Display>Display medium</Display>
{/* Маленький */}
<Display size="small">Display small</Display>`

export const custom = `<Display
  size="small"
  className="text-green-400 dark:text-green-400 w-[250px]"
>
  Зелёный текст шириной 250 пикселей
</Display>
<Display size="small">Просто обычный текст</Display>`