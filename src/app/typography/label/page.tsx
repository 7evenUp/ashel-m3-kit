import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Label from "@/components/ui/text/Label";

const LabelPage = () => {
  return (
    <div>
      <Display className="mb-4">Label роль</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2" size={"small"}>
          Описание
        </Headline>
      </div>
    </div>
  );
};

export default LabelPage;
