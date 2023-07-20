export const usage = `import Body from "@/components/typography/Body"

{/* Большой */}
<Body size="large">Body large</Body>
{/* Средний */}
<Body size="medium">Body medium</Body>
{/* или без указания size (medium по умолчанию) */}
<Body>Body medium</Body>
{/* Маленький */}
<Body size="small">Body small</Body>`

export const custom = `<Body size="large" className="text-lg w-[150px]">
  Короткий текст размером 18px
</Body>
<Body size="large">
  Стандартный текст
</Body>`