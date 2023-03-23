import Display from "@/components/ui/text/Display";

const DisplayPage = () => {
  return (
    <div className="p-3 bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-xl flex flex-col gap-3">
      <Display
        size={"large"}
        className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
      >
        Display large
      </Display>
      <Display size={"medium"}>Display medium</Display>
      <Display size={"small"}>Display small</Display>
    </div>
  );
};

export default DisplayPage;
