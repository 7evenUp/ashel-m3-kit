export const usage = `import Headline from "@/components/typography/Headline""

{/* Большой */}
<Headline size="large">Headline large</Headline>
{/* Средний */}
<Headline size="medium">Headline medium</Headline>
{/* или без указания size (medium по умолчанию) */}
<Headline>Headline medium</Headline>
{/* Маленький */}
<Headline size="small">Headline small</Headline>`

export const custom = `<Headline
  className="text-rose-400 dark:text-rose-400 tracking-widest"
>
  Розовый текст с увеличенным letter-spacing
</Headline>
<Headline>Просто обычный текст</Headline>`