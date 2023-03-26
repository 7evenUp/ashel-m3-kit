import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Body from "@/components/ui/text/Body";
import Display from "@/components/ui/text/Display";
import expressiveTypefacePic from "@/public/typography/display/expressive_typeface.png";
import eyeCatchingDesignPic from "@/public/typography/display/eye_catching_design.png";
import Image from "next/image";

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
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Expressive typeface used for display styles"
              src={expressiveTypefacePic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              Для текста типа Display можно рассмотреть выбор более
              выразительного шрифта, например рукописного.
            </Body>
          </div>

          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Expressive typeface used for eye-catching design"
              src={eyeCatchingDesignPic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              Выразительный шрифт может привлечь внимание читателей
              привлекательным дизайном.
            </Body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
