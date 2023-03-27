import Heading from "@/components/Heading";
import ImageWithText from "@/components/ImageWithText";
import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";
import articlePestoPic from "@/public/typography/body/article_pesto.png";
import readablePassagesPic from "@/public/typography/body/readable_passages.png";
import setupFlowPic from "@/public/typography/body/setup_flow.png";

const BodyPage = () => {
  return (
    <div>
      <Display className="mb-4">Body роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Body роли используются для более длинных отрывков текста в вашем
          приложении.
        </Paragraph>
        <Paragraph>
          Используйте шрифты, предназначенные для стилей основного текста,
          которые читаются при меньших размерах и удобны для чтения в более
          длинных абзацах.
        </Paragraph>
        <Paragraph>
          Избегайте выразительных или декоративных шрифтов для основного текста,
          потому что их может быть труднее читать при маленьком размере.
        </Paragraph>
        <ImageWithText
          alt="Body styles must be readable for long passages"
          src={readablePassagesPic}
          width={400}
        >
          Body должен быть читабельным для длинных отрывков.
        </ImageWithText>

        <div className="flex gap-5">
          <ImageWithText
            alt="Body style used throughout an article about pesto"
            src={articlePestoPic}
            width={400}
          >
            Body, используемый в статье о песто.
          </ImageWithText>
          <ImageWithText
            alt="Example of body style used throughout a setup flow"
            src={setupFlowPic}
            width={400}
          >
            Пример body, используемого в процессе настройки.
          </ImageWithText>
        </div>
      </div>
    </div>
  );
};

export default BodyPage;
