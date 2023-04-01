import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";
import { Checkbox, CheckboxLabel } from "@/lib/Checkbox";

const CheckboxPage = () => {
  return (
    <div>
      <Display className="mb-4">Checkbox</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>

        <Paragraph>
          Используются, когда пользователю необходимо выбрать одну или несколько
          опций из списка
        </Paragraph>

        <Heading>Примеры</Heading>

        <div className="flex items-center gap-4">
          <Checkbox defaultChecked id="milk" />
          <CheckboxLabel htmlFor="milk">Купить молоко</CheckboxLabel>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox id="world" />
          <CheckboxLabel htmlFor="world">Покорить мир</CheckboxLabel>
        </div>
      </div>
    </div>
  );
};

export default CheckboxPage;
