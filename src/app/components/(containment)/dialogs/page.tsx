import Heading from "@/components/Heading";
import Display from "@/components/ui/text/Display";
import Button from "@/lib/Button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogActionButtonContainer,
  DialogActionButton,
} from "@/lib/Dialog";

const DialogPage = () => {
  return (
    <div>
      <Display className="mb-4">Dialog</Display>

      <div className="flex flex-col gap-2">
        <Heading>Примеры</Heading>

        <Dialog>
          <DialogTrigger asChild>
            <Button appearance={"tonal"}>Открыть Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Body description.</DialogDescription>
            <DialogActionButtonContainer>
              <DialogActionButton>Close</DialogActionButton>
              <DialogActionButton>Save changes</DialogActionButton>
            </DialogActionButtonContainer>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogPage;
