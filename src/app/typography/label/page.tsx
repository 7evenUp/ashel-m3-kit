import Heading from "@/components/Heading"
import ImageWithText from "@/components/ImageWithText"
import Paragraph from "@/components/Paragraph"
import Body from "@/components/ui/text/Body"
import Display from "@/components/ui/text/Display"
import Label from "@/components/ui/text/Label"
import Card from "@/lib/Card"
import musicPlayerPic from "@/public/typography/label/music_player.png"
import navigationBarPic from "@/public/typography/label/navigation_bar.png"
import quickReadingPic from "@/public/typography/label/quick_reading.png"

const LabelPage = () => {
  return (
    <div>
      <Display className="mb-4">Label роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Label — это меньшие, утилитарные стили, используемые для таких вещей,
          как текст внутри компонентов или для очень маленького текста в
          основной части содержимого, например для подписей.
        </Paragraph>
        <Paragraph>Кнопки, например, используют крупный стиль label.</Paragraph>
        <ImageWithText
          alt="Label styles should enable quick reading at small sizes, such as in buttons"
          src={quickReadingPic}
          width={400}
        >
          Label должны обеспечивать быстрое чтение на небольших размерах,
          например на кнопках.
        </ImageWithText>

        <div className="flex gap-5">
          <ImageWithText
            alt="A music player using label style for the timecode"
            src={musicPlayerPic}
            width={400}
          >
            Музыкальный плеер, использующий label для таймкода
          </ImageWithText>
          <ImageWithText
            alt="A navigation bar using label style for the destination text"
            src={navigationBarPic}
            width={400}
          >
            Navigation Bar использующий label в качестве текста к ссылкам
          </ImageWithText>
        </div>

        <Heading>Примеры</Heading>
        <Card appearance="outlined" className="w-fit grid grid-cols-2 gap-6">
          <Label size="large">Label large</Label>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 14px</Body>
            <Body>line-height: 20px</Body>
            <Body>letter-spacing: 0.1px</Body>
            <Body>font-weight: 500</Body>
          </div>

          <Label size="medium">Label medium</Label>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 12px</Body>
            <Body>line-height: 16px</Body>
            <Body>letter-spacing: 0.5px</Body>
            <Body>font-weight: 500</Body>
          </div>
          <Label size="small">Label small</Label>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 11px</Body>
            <Body>line-height: 16px</Body>
            <Body>letter-spacing: 0.5px</Body>
            <Body>font-weight: 500</Body>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default LabelPage
