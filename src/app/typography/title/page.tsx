import Heading from "@/components/Heading";
import ImageWithText from "@/components/ImageWithText";
import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";
import appBarExamplePic from "@/public/typography/title/app_bar_example.png";
import categoryHeaderExamplePic from "@/public/typography/title/category_header_example.png";
import newsExamplePic from "@/public/typography/title/news_example.png";

const TitlePage = () => {
  return (
    <div>
      <Display className="mb-4">Title роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Title меньше, чем headline, и их следует использовать для текста со
          средним акцентом, который остается относительно коротким. Например,
          рассмотрите возможность использования стилей заголовков для разделения
          второстепенных отрывков текста или второстепенных областей
          содержимого.
        </Paragraph>
        <Paragraph>
          Для title соблюдайте осторожность при использовании выразительных
          шрифтов, включая печатные и рукописные стили.
        </Paragraph>
        <ImageWithText
          alt="A news article title using the title style to capture attention"
          src={newsExamplePic}
          width={400}
        >
          Новостной пост, использующий title для захвата внимания.
        </ImageWithText>

        <div className="flex gap-5">
          <ImageWithText
            alt="Top app bar using title style"
            src={appBarExamplePic}
            width={400}
          >
            Top App Bar, использующий title.
          </ImageWithText>
          <ImageWithText
            alt="Example of title style applied to a category header: Top News"
            src={categoryHeaderExamplePic}
            width={400}
          >
            Пример title, применённого к заголовку категории: Top News.
          </ImageWithText>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
