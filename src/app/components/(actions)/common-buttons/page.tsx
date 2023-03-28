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

        <Subheading>Filled Tonal</Subheading>
        <div className="flex gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10">
          <div className="flex flex-col gap-4">
            <Button appearance="tonal" type="button">
              Filled Tonal
            </Button>
            <Button appearance="tonal" type="button" icon={<Plus />}>
              Filled Tonal
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button appearance="tonal" type="button" disabled>
              Filled Tonal
            </Button>
            <Button appearance="tonal" type="button" icon={<Plus />} disabled>
              Filled Tonal
            </Button>
          </div>
        </div>

        <Subheading>Outlined</Subheading>
        <div className="flex gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10">
          <div className="flex flex-col gap-4">
            <Button appearance="outlined" type="button">
              Outlined
            </Button>
            <Button appearance="outlined" type="button" icon={<Plus />}>
              Outlined
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button appearance="outlined" type="button" disabled>
              Outlined
            </Button>
            <Button appearance="outlined" type="button" icon={<Plus />} disabled>
              Outlined
            </Button>
          </div>
        </div>

        <Subheading>Text</Subheading>
        <div className="flex gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10">
          <div className="flex flex-col gap-4">
            <Button appearance="text" type="button">
              Text button
            </Button>
            <Button appearance="text" type="button" icon={<Plus />}>
              Text button
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button appearance="text" type="button" disabled>
              Text button
            </Button>
            <Button appearance="text" type="button" icon={<Plus />} disabled>
              Text button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonButtonsPage;
