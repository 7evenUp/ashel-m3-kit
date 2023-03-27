import Heading from "@/components/Heading";
import ImageWithText from "@/components/ImageWithText";
import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";
import expressiveTypefacePic from "@/public/typography/display/expressive_typeface.png";
import eyeCatchingDesignPic from "@/public/typography/display/eye_catching_design.png";

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
      </div>
    </div>
  );
};

export default DisplayPage;
