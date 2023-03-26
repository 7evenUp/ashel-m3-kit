import Heading from "@/components/Heading";
import InlineLink from "@/components/InlineLink";
import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";

const Surfaces = () => {
  return (
    <div>
      <Display className="mb-4">Surfaces</Display>

      <div className="flex flex-col gap-2">
        <Heading>Страница в разработке</Heading>
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
