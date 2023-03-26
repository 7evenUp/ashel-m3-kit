import InlineLink from "@/components/InlineLink";
import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";

const Surfaces = () => {
  return (
    <div>
      <Display className="mb-4">Surfaces</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2">Страница в разработке</Headline>
        <Paragraph>
          Основные моменты на{" "}
          <InlineLink href="https://m3.material.io/styles/color/the-color-system/color-roles">
            офицальном сайте
          </InlineLink>
        </Paragraph>
      </div>
    </div>
  );
};

export default Surfaces;
