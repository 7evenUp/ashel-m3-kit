export const usageCode = `import { AddUser, LogOut, ProfileCircle } from "iconoir-react"

import Body from "@/shared/typography/Body"
import Label from "@/shared/typography/Label"

import IconButton from "@/shared/ui/IconButton"
import UIStateLayer from "@/shared/ui/UIStateLayer"
import AssistChip from "@/shared/ui/Chips/AssistChip"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/Popover"

const PopoverExample = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton appearance="filled" icon={<ProfileCircle />} />
      </PopoverTrigger>
      <PopoverContent
        className="flex flex-col w-[376px]"
        align="start"
        side="right"
      >
        <div className="flex flex-col gap-0.5 px-2 pt-2">
          <div className="grid grid-cols-[64px_1fr] grid-rows-[64px_28px] gap-2 p-4 bg-light-surfaceContainer dark:bg-dark-surfaceContainer rounded-t-3xl rounded-b">
            <div className="w-full h-full rounded-full bg-light-tertiary dark:bg-dark-tertiary" />
            <div className="flex flex-col justify-center text-light-onSurface dark:text-dark-onSurface">
              <Label size="large">Джон Уик</Label>
              <Body size="small">john.wick@gmail.com</Body>
            </div>
            <AssistChip appearance="outlined" className="col-start-2">
              Управление аккаунтом Google
            </AssistChip>
          </div>
          <div className="flex flex-col bg-light-surfaceContainer dark:bg-dark-surfaceContainer rounded-t rounded-b-3xl">
            <button className="group">
              <UIStateLayer className="grid grid-cols-[64px_1fr] grid-rows-1 items-center gap-2 pl-4 py-3 rounded-t bg-light-primary dark:bg-dark-primary">
                <div className="w-8 h-8 rounded-full bg-light-tertiary dark:bg-dark-tertiary place-self-center" />
                <div className="flex flex-col items-start text-light-onSurface dark:text-dark-onSurface">
                  <Label size="large">John_Wick</Label>
                  <Body size="small">john.wick.new@gmail.com</Body>
                </div>
              </UIStateLayer>
            </button>
            <button className="group">
              <UIStateLayer className="grid grid-cols-[64px_1fr] grid-rows-1 items-center gap-2 pl-4 py-3 rounded-b-3xl bg-light-primary dark:bg-dark-primary text-light-onSurface dark:text-dark-onSurface">
                <AddUser className="place-self-center" />
                <Label size="large" className="justify-self-start">
                  Добавить аккаунт
                </Label>
              </UIStateLayer>
            </button>
          </div>
        </div>
        <button className="group mt-0.5">
          <UIStateLayer className="grid grid-cols-[64px_1fr] grid-rows-1 items-center gap-2 pl-6 py-3 bg-light-primary dark:bg-dark-primary text-light-onSurface dark:text-dark-onSurface">
            <LogOut className="place-self-center" />
            <Label size="large" className="justify-self-start">
              Выйти из всех аккаунтов
            </Label>
          </UIStateLayer>
        </button>
        <div className="flex items-center justify-center py-3 border-t border-light-outlineVariant dark:border-dark-outlineVariant">
          <button className="group">
            <UIStateLayer className="flex items-center py-1 px-2 rounded bg-light-onSurface dark:bg-dark-onSurface text-light-onSurface dark:text-dark-onSurface">
              <Label size="small">Политика конфиденциальности</Label>
            </UIStateLayer>
          </button>
          &nbsp;•&nbsp;
          <button className="group">
            <UIStateLayer className="flex items-center py-1 px-2 rounded bg-light-onSurface dark:bg-dark-onSurface text-light-onSurface dark:text-dark-onSurface">
              <Label size="small">Условия использования</Label>
            </UIStateLayer>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverExample`