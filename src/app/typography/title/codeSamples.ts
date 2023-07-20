export const usage = `import Title from "@/components/typography/Title"

{/* Большой */}
<Title size="large">Title large</Title>
{/* Средний */}
<Title size="medium">Title medium</Title>
{/* или без указания size (medium по умолчанию) */}
<Title>Title medium</Title>
{/* Маленький */}
<Title size="small">Title small</Title>`

export const custom = `<Title size="large" className="leading-5 w-[200px]">
  Текст с очень низким line-height
</Title>
<Title size="large" className="w-[200px] mt-2">
  Текст со стандартным line-height
</Title>`