import Heading from "@/components/Heading";
import Display from "@/components/ui/text/Display";

const DialogPage = () => {
  return (
    <div>
      <Display className="mb-4">Dialog</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
      </div>
    </div>
  );
};

export default DialogPage;
