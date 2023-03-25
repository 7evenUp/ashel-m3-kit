import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Body from "@/components/ui/text/Body";
import Image from "next/image";
import newsExamplePic from "@/public/typography/title/news_example.png";
import appBarExamplePic from "@/public/typography/title/app_bar_example.png";
import categoryHeaderExamplePic from "@/public/typography/title/category_header_example.png";

const TitlePage = () => {
  return (
    <div>
      <Display className="mb-4">Title роль</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2">Описание</Headline>
        <Body size={"large"} className="max-w-prose">
          Title меньше, чем headline, и их следует использовать для текста со
          средним акцентом, который остается относительно коротким. Например,
          рассмотрите возможность использования стилей заголовков для разделения
          второстепенных отрывков текста или второстепенных областей
          содержимого.
        </Body>
        <Body size={"large"} className="max-w-prose">
          Для title соблюдайте осторожность при использовании выразительных
          шрифтов, включая печатные и рукописные стили.
        </Body>
        <div className="flex flex-col gap-2 my-6 w-fit">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="A news article title using the title style to capture attention"
            src={newsExamplePic}
            width={400}
          />
          <Body size={"small"} className="max-w-prose px-2">
            Новостной пост, использующий title для захвата внимания.
          </Body>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Top app bar using title style"
              src={appBarExamplePic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              Top App Bar, использующий title.
            </Body>
          </div>

          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Example of title style applied to a category header: Top News"
              src={categoryHeaderExamplePic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              Пример title, применённого к заголовку категории: Top News.
            </Body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
