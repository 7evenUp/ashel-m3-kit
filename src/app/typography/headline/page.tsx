import Heading from "@/components/Heading"
import ImageWithText from "@/components/ImageWithText"
import Paragraph from "@/components/Paragraph"
import Body from "@/components/ui/text/Body"
import Display from "@/components/ui/text/Display"
import Headline from "@/components/ui/text/Headline"
import Card from "@/lib/Card"
import expressiveTypefacePic from "@/public/typography/headline/expressive_typeface.png"
import headlineDialogPic from "@/public/typography/headline/headline_dialog.png"
import shortTextPic from "@/public/typography/headline/short_text.png"

const HeadlinePage = () => {
  return (
    <div>
      <Display className="mb-4">Headline роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Headline лучше всего подходят для коротких, четких текстов на
          небольших экранах. Эти стили могут быть полезны для маркировки
          основных фрагментов текста или важных областей содержимого.
        </Paragraph>
        <Paragraph>
          В headlines также можно использовать выразительные шрифты при условии,
          что соответствующие высота строки и межбуквенный интервал также
          интегрированы для обеспечения удобочитаемости.
        </Paragraph>
        <ImageWithText
          alt="Expressive typeface used for eye-catching design"
          src={expressiveTypefacePic}
          width={400}
        >
          Выразительный шрифт так же можно использовать для headline, как и для
          display.
        </ImageWithText>

        <div className="flex gap-5">
          <ImageWithText
            alt="Headline style used for short text on a small screen"
            src={shortTextPic}
            width={400}
          >
            Выразительный шрифт так же можно использовать для headline, как и
            для display.
          </ImageWithText>
          <ImageWithText
            alt="Dialog using a headline style"
            src={headlineDialogPic}
            width={400}
          >
            Dialog, использующий headline.
          </ImageWithText>
        </div>

        <Heading>Примеры</Heading>
        <Card appearance="outlined" className="w-fit grid grid-cols-2 gap-6">
          <Headline size="large">Headline large</Headline>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 32px</Body>
            <Body>line-height: 40px</Body>
          </div>
          <Headline size="medium">Headline medium</Headline>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 28px</Body>
            <Body>line-height: 36px</Body>
          </div>
          <Headline size="small">Headline small</Headline>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 24px</Body>
            <Body>line-height: 32px</Body>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default HeadlinePage
