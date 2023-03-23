import Body from "@/components/ui/text/Body";

const BodyPage = () => {
  return (
    <div className="p-3 bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-xl flex flex-col gap-3">
      <Body size={"large"}>Body large</Body>
      <Body size={"medium"}>Body medium</Body>
      <Body size={"small"}>Body small</Body>
    </div>
  );
};

export default BodyPage;
