import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";

const MenusPage = () => {
  return (
    <div>
      <Display className="mb-4">Menus</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
        Меню отображают список вариантов на временной поверхности
        </Paragraph>

        <Heading>Примеры</Heading>
      </div>
    </div>
  );
};

export default MenusPage;
