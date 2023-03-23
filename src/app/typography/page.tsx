import Body from "@/components/ui/text/Body";
import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Image from "next/image";
import typeStylesPic from "../../../public/type_styles.png";

const Typography = () => {
  return (
    <div>
      <Display className="mb-4">Typography Overview</Display>

      <div className="flex flex-col gap-2">
        <Headline size={"small"}>Пять стилей шрифта</Headline>
        <Body size={"large"} className="max-w-prose">
          Material Design V3 определяет 5 ролей для шрифта: Display, headline,
          title, body и label. Эти новые роли носят более описательный характер,
          позволяя упростить применение в более широком диапазоне вариантов
          использования.
        </Body>
        <Image
          className="max-w-[800px] rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
          alt="Type styles"
          src={typeStylesPic}
        />
      </div>
    </div>
  );
};

export default Typography;
