import Label from "@/components/ui/text/Label";

const LabelPage = () => {
  return (
    <div className="p-3 bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-xl flex flex-col gap-3">
      <Label size={"large"}>Label large</Label>
      <Label size={"medium"}>Label medium</Label>
      <Label size={"small"}>Label small</Label>
    </div>
  );
};

export default LabelPage;
