export const usageCode = `<Dialog>
  <DialogTrigger asChild>
    <Button appearance={"tonal"}>Открыть Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Dialog Title</DialogTitle>
    <DialogDescription>Dialog Body description.</DialogDescription>
    {/* Your other content goes here */}
    <DialogActionButtonContainer>
      <DialogActionButton>Close</DialogActionButton>
      <DialogActionButton>Save changes</DialogActionButton>
    </DialogActionButtonContainer>
  </DialogContent>
</Dialog>`