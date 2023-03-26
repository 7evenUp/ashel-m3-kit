import InlineLink from "@/components/InlineLink";
import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import FilledTextInput from "@/lib/FilledTextInput";

const FilledTextFieldPage = () => {
  return (
    <div>
      <Display className="mb-4">Filled text field</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2">Описание</Headline>

        <Paragraph>
          Текстовые поля позволяют пользователям вводить текст в
          пользовательский интерфейс. Обычно они отображаются в формах и
          диалоговых окнах.
        </Paragraph>
        <Paragraph>
          Подробнее на <InlineLink href="https://m3.material.io/components/text-fields/overview">офицальном сайт</InlineLink>
        </Paragraph>

        <Headline className="mt-4 mb-2">Примеры</Headline>

        <div className="rounded-md border border-light-surfaceVariant dark:border-dark-surfaceVariant w-fit p-10">
          {/* <FilledTextInput label="Filled text input" id="filled" /> */}
        </div>
      </div>
    </div>
  );
};

export default FilledTextFieldPage;
