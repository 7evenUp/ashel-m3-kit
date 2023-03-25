import Body from "@/components/ui/text/Body";
import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Image from "next/image";
import expressiveTypefacePic from "@/public/typography/headline/expressive_typeface.png";
import shortTextPic from "@/public/typography/headline/short_text.png";
import headlineDialogPic from "@/public/typography/headline/headline_dialog.png";

const HeadlinePage = () => {
  return (
    <div>
      <Display className="mb-4">Headline роль</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2">Описание</Headline>
        <Body size={"large"} className="max-w-prose">
          Headline лучше всего подходят для коротких, четких текстов на
          небольших экранах. Эти стили могут быть полезны для маркировки
          основных фрагментов текста или важных областей содержимого.
        </Body>
        <Body size={"large"} className="max-w-prose">
          В headlines также можно использовать выразительные шрифты при условии,
          что соответствующие высота строки и межбуквенный интервал также
          интегрированы для обеспечения удобочитаемости.
        </Body>
        <div className="flex flex-col gap-2 my-6 w-fit">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Expressive typeface used for eye-catching design"
            src={expressiveTypefacePic}
            width={400}
          />
          <Body size={"small"} className="max-w-prose px-2">
            Выразительный шрифт так же можно использовать для headline, как и
            для display
          </Body>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Headline style used for short text on a small screen"
              src={shortTextPic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              Headline можно использовать в качестве короткого текста на
              маленьких экранах
            </Body>
          </div>

          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Dialog using a headline style"
              src={headlineDialogPic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              Dialog, использующий headline
            </Body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlinePage;
