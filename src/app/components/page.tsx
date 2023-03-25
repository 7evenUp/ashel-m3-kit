import Body from "@/components/ui/text/Body";
import Display from "@/components/ui/text/Display";

const Components = () => {
  return (
    <div>
      <Display className="mb-4">Components Overview</Display>

      <div className="flex flex-col gap-2">
        <Body size={"large"} className="max-w-prose">
          Компоненты - это интерактивные строительные блоки для создания
          пользовательского интерфейса. Их можно разделить на пять категорий в
          зависимости от их назначения: действие, локализация, навигация, выбор
          и ввод текста.
        </Body>
      </div>
    </div>
  );
};

export default Components;
