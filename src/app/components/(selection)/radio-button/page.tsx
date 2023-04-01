import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";
import {RadioGroup, RadioGroupItem} from "@/lib/RadioGroup";

const RadioButtonPage = () => {
  return (
    <div>
      <Display className="mb-4">Radio Button</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>Radio buttons позволяют пользователям выбирать один вариант из набора</Paragraph>

        <Heading>Примеры</Heading>
        <RadioGroup>
          <RadioGroupItem value="x" id="x">First</RadioGroupItem>
          <RadioGroupItem value="y" id="y">Second</RadioGroupItem>
          <RadioGroupItem value="z" id="z">Third</RadioGroupItem>
        </RadioGroup>
      </div>
    </div>
  );
};

export default RadioButtonPage;
