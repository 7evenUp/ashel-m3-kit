import Headline from "@/components/ui/text/Headline";

const HeadlinePage = () => {
  return (
    <div className="p-3 bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-xl flex flex-col gap-3">
      <Headline size={"large"}>Headline large</Headline>
      <Headline size={"medium"}>Headline medium</Headline>
      <Headline size={"small"}>Headline small</Headline>
    </div>
  );
};

export default HeadlinePage;
