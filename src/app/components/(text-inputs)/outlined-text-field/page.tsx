import Heading from "@/components/Heading";
import Display from "@/components/ui/text/Display";

const OutlinedTextFieldPage = () => {
  return (
    <div>
      <Display className="mb-4">Outlined text field</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
      </div>
    </div>
  );
};

export default OutlinedTextFieldPage;
