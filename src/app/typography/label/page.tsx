import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Body from "@/components/ui/text/Body";
import Image from "next/image";
import quickReadingPic from "@/public/typography/label/quick_reading.png";
import musicPlayerPic from "@/public/typography/label/music_player.png";
import navigationBarPic from "@/public/typography/label/navigation_bar.png";

const LabelPage = () => {
  return (
    <div>
      <Display className="mb-4">Label роль</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2">Описание</Headline>
        <Body size={"large"} className="max-w-prose">
          Label — это меньшие, утилитарные стили, используемые для таких вещей,
          как текст внутри компонентов или для очень маленького текста в
          основной части содержимого, например для подписей.
        </Body>
        <Body size={"large"} className="max-w-prose">
          Кнопки, например, используют крупный стиль label.
        </Body>
        <div className="flex flex-col gap-2 my-6 w-fit">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Label styles should enable quick reading at small sizes, such as in buttons"
            src={quickReadingPic}
            width={400}
          />
          <Body size={"small"} className="max-w-prose px-2">
            Label должны обеспечивать быстрое чтение на небольших размерах,
            например на кнопках.
          </Body>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="A music player using label style for the timecode"
              src={musicPlayerPic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              Музыкальный плеер, использующий label для таймкода
            </Body>
          </div>

          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="A navigation bar using label style for the destination text"
              src={navigationBarPic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              Navigation Bar использующий label в качестве текста к ссылкам
            </Body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelPage;
