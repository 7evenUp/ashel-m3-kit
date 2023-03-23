import Body from "@/components/ui/text/Body";
import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";

const BodyPage = () => {
  return (
    <div>
      <Display className="mb-4">Body роль</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2" size={"small"}>
          Описание
        </Headline>
      </div>
    </div>
  );
};

export default BodyPage;
