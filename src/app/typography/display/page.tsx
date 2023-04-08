import Heading from "@/components/Heading"
import ImageWithText from "@/components/ImageWithText"
import Paragraph from "@/components/Paragraph"
import Body from "@/components/ui/text/Body"
import Display from "@/components/ui/text/Display"
import Card from "@/lib/Card"
import expressiveTypefacePic from "@/public/typography/display/expressive_typeface.png"
import eyeCatchingDesignPic from "@/public/typography/display/eye_catching_design.png"

const DisplayPage = () => {
  return (
    <div>
      <Display className="mb-4">Display роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          По умолчанию есть три стиля отображения: большой, средний и маленький.
          Как самый крупный текст на экране, display стили зарезервированы для
          краткого и важного текста или цифр. Лучше всего они работают на
          больших экранах.
        </Paragraph>
        <div className="flex gap-5">
          <ImageWithText
            src={expressiveTypefacePic}
            alt="Expressive typeface used for display styles"
            width={400}
          >
            Для текста типа Display можно рассмотреть выбор более выразительного
            шрифта, например рукописного.
          </ImageWithText>

          <ImageWithText
            alt="Expressive typeface used for eye-catching design"
            src={eyeCatchingDesignPic}
            width={400}
          >
            Выразительный шрифт может привлечь внимание читателей
            привлекательным дизайном.
          </ImageWithText>
        </div>

        <Heading>Примеры</Heading>
        <Card appearance="outlined" className="w-fit grid grid-cols-2 gap-6">
          <Display size="large">Display large</Display>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 57px</Body>
            <Body>line-height: 64px</Body>
            <Body>letter-spacing: -0.25px</Body>
          </div>
          <Display size="medium">Display medium</Display>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 45px</Body>
            <Body>line-height: 52px</Body>
          </div>
          <Display size="small">Display small</Display>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 36px</Body>
            <Body>line-height: 44px</Body>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DisplayPage
