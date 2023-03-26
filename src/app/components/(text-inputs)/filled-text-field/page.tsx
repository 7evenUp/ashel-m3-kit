import InlineLink from "@/components/InlineLink";
import Body from "@/components/ui/text/Body";
import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import FilledTextInput from "@/lib/FilledTextInput";

const FilledTextFieldPage = () => {
  return (
    <div>
      <Display className="mb-4">Filled text field</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2">Описание</Headline>

        <Body size={"large"} className="max-w-prose">
          Текстовые поля позволяют пользователям вводить текст в
          пользовательский интерфейс. Обычно они отображаются в формах и
          диалоговых окнах.
        </Body>
        <Body size={"large"} className="max-w-prose">
          Подробнее на <InlineLink href="https://m3.material.io/components/text-fields/overview">офицальном сайт</InlineLink>
        </Body>

        <Headline className="mt-4 mb-2">Примеры</Headline>

        <div className="rounded-md border border-light-surfaceVariant dark:border-dark-surfaceVariant w-fit p-10">
          {/* <FilledTextInput label="Filled text input" id="filled" /> */}
        </div>
      </div>
    </div>
  );
};

export default FilledTextFieldPage;
