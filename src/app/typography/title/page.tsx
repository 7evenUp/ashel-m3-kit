import Title from "@/components/ui/text/Title";

const TitlePage = () => {
  return (
    <div className="p-3 bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-xl flex flex-col gap-3">
      <Title size={"large"}>Title large</Title>
      <Title size={"medium"}>Title medium</Title>
      <Title size={"small"}>Title small</Title>
    </div>
  );
};

export default TitlePage;
