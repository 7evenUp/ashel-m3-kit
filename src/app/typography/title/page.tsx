import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Title from "@/components/ui/text/Title";

const TitlePage = () => {
  return (
    <div>
      <Display className="mb-4">Title роль</Display>

      <div className="flex flex-col gap-2">
        <Headline className="mt-4 mb-2" size={"small"}>
          Описание
        </Headline>
      </div>
    </div>
  );
};

export default TitlePage;
