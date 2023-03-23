import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Body from "@/components/ui/text/Body";
import Image from "next/image";
import readablePassagesPic from "../../../../public/typography/body/readable_passages.png";
import articlePestoPic from "../../../../public/typography/body/article_pesto.png";
import setupFlowPic from "../../../../public/typography/body/setup_flow.png";

const BodyPage = () => {
  return (
    <div>
      <Display className="mb-4">Body роль</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2" size={"small"}>
          Описание
        </Headline>
        <Body size={"large"} className="max-w-prose">
        Body роли используются для более длинных отрывков текста в вашем приложении.
        </Body>
        <Body size={"large"} className="max-w-prose">
        Используйте шрифты, предназначенные для стилей основного текста, которые читаются при меньших размерах и удобны для чтения в более длинных абзацах.
        </Body>
        <Body size={"large"} className="max-w-prose">
        Избегайте выразительных или декоративных шрифтов для основного текста, потому что их может быть труднее читать при маленьком размере.
        </Body>
        <div className="flex flex-col gap-2 my-6 w-fit">
          <Image
            className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
            alt="Body styles must be readable for long passages"
            src={readablePassagesPic}
            width={400}
          />
          <Body size={"small"} className="max-w-prose px-2">
            Body должен быть читабельным для длинных отрывков.
          </Body>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Body style used throughout an article about pesto"
              src={articlePestoPic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              Body, используемый в статье о песто.
            </Body>
          </div>

          <div className="flex flex-col gap-2 my-6 w-fit">
            <Image
              className="rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
              alt="Example of body style used throughout a setup flow"
              src={setupFlowPic}
              width={400}
            />
            <Body size={"small"} className="max-w-prose px-2">
              Пример body, используемого в процессе настройки.
            </Body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyPage;
