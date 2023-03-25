import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";

const OutlinedTextFieldPage = () => {
  return (
    <div>
      <Display className="mb-4">Outlined text field</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2">
          Описание
        </Headline>
        
      </div>
    </div>
  );
};

export default OutlinedTextFieldPage;
