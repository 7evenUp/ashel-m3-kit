export const usageCode = `<Sheet>
  <SheetTrigger asChild>
    <Button appearance="filled">Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Заголовок</SheetTitle>
    </SheetHeader>
    <div className="flex flex-col px-6">
      <Body className="text-light-onSurface dark:text-dark-onSurface">
        Ваш контент будет находиться здесь
      </Body>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button appearance="filled">Сохранить</Button>
      </SheetClose>
      <SheetClose asChild>
        <Button appearance="outlined">Отменить</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`