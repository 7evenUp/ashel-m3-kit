import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";

const Components = () => {
  return (
    <div>
      <Display className="mb-4">Components Overview</Display>

      <div className="flex flex-col gap-2">
        <Paragraph>
          Компоненты - это интерактивные строительные блоки для создания
          пользовательского интерфейса. Их можно разделить на пять категорий в
          зависимости от их назначения: action, containment, navigation,
          selection и text input.
        </Paragraph>
      </div>
    </div>
  );
};

export default Components;
