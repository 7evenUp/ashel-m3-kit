import Heading from "@/components/Heading";
import ImageWithText from "@/components/ImageWithText";
import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";
import musicPlayerPic from "@/public/typography/label/music_player.png";
import navigationBarPic from "@/public/typography/label/navigation_bar.png";
import quickReadingPic from "@/public/typography/label/quick_reading.png";

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
      </div>
    </div>
  );
};

export default LabelPage;
