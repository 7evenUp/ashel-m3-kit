import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Subheading from "@/components/Subheading";
import Display from "@/components/ui/text/Display";
import Button from "@/lib/Button";
import { Plus } from "iconoir-react";

const CommonButtonsPage = () => {
  return (
    <div>
      <Display className="mb-4">Common Buttons</Display>

      <div className="flex flex-col items-start gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Есть 5 видов кнопок: Elevated, Filled, Tonal, Outlined, Text
        </Paragraph>

        <Subheading>Elevated</Subheading>
        <div className="flex gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10">
          <div className="flex flex-col gap-4">
            <Button appearance="elevated" type="button">
              Elevated
            </Button>
            <Button appearance="elevated" type="button" icon={<Plus />}>
              Elevated
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button appearance="elevated" type="button" disabled>
              Elevated
            </Button>
            <Button appearance="elevated" type="button" icon={<Plus />} disabled>
              Elevated
            </Button>
          </div>
        </div>

        <Subheading>Filled</Subheading>
        <div className="flex gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10">
          <div className="flex flex-col gap-4">
            <Button appearance="filled" type="button">
              Filled
            </Button>
            <Button appearance="filled" type="button" icon={<Plus />}>
              Filled
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button appearance="filled" type="button" disabled>
              Filled
            </Button>
            <Button appearance="filled" type="button" icon={<Plus />} disabled>
              Filled
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonButtonsPage;
