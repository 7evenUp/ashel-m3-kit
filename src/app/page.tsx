import { Cart, Menu, Settings, User } from "iconoir-react"

import Body from "@/shared/typography/Body"
import Display from "@/shared/typography/Display"
import Headline from "@/shared/typography/Headline"
import Label from "@/shared/typography/Label"
import Title from "@/shared/typography/Title"

import Paragraph from "@/components/Paragraph"

import Button from "@/shared/ui/Button"
import Card from "@/shared/ui/Card"
import {
  Dialog,
  DialogActionButton,
  DialogActionButtonContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/Dialog"
import IconButton from "@/shared/ui/IconButton"

export default function Home() {
  return (
    <main className="flex flex-col gap-2 text-light-onSurface dark:text-dark-onSurface p-6">
      <Display>Ashel UI Kit</Display>
      <Paragraph>
        Переиспользуемые компоненты, построенные с помощью Radix-ui и
        TailwindCSS, вдохновлённые последней версией дизайн системы от Google -
        Material 3.
      </Paragraph>
      <Paragraph>
        Ниже наглядный пример, какие интерфейсы можно создавать в считанные
        минуты, используя данные компоненты, добиваясь при этом идеальной
        цветовой палитры как для светлой, так и для тёмной тем приложения, не
        забывая о доступности UI элементов.
      </Paragraph>
      <div className="mt-10 flex flex-col w-full max-w-[1200px] rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant">
        <header className="bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow h-20 flex justify-end items-center gap-2 px-3 rounded-t-xl">
          <IconButton
            appearance="outlined"
            icon={<Menu />}
            className="mr-auto"
          />
          <IconButton appearance="standart" icon={<Settings />} />
          <IconButton appearance="standart" icon={<Cart />} />
          <IconButton appearance="filled" icon={<User />} />
        </header>
        <main className="bg-light-surfaceContainer dark:bg-dark-surfaceContainer px-3 py-6 rounded-b-xl">
          <Headline>Shopping center</Headline>
          <div className="mt-4 flex gap-2">
            <Card appearance="filled" className="flex-1 flex flex-col gap-2">
              <Headline size="small">Brand new R-8</Headline>
              <Body>
                The 2023 Audi R8 packs a 5.2-liter V10 engine with two states of
                tune. A seven-speed automatic transmission and rear-wheel drive
                are standard.
              </Body>
              <div className="flex justify-between items-center border-t border-light-outlineVariant dark:border-dark-outlineVariant py-2 mt-auto">
                <Label>You can not afford it anyway:)</Label>
                <Button appearance="elevated" disabled>
                  Buy
                </Button>
              </div>
            </Card>
            <Card appearance="filled" className="flex-1 flex flex-col gap-2">
              <Headline size="small">VAZ-2114</Headline>
              <Body>
                VAZ-2114 is a five-door hatchback manufactured by the Volga
                Automobile Plant. The car has a unique design of the nose area
                of the body, received new headlights, hood, radiator lining,
                bumper and moldings.
              </Body>
              <div className="flex justify-between items-center border-t border-light-outlineVariant dark:border-dark-outlineVariant py-2 mt-auto">
                <Title size="large">1500 $</Title>
                <Button appearance="filled">Buy</Button>
              </div>
            </Card>
            <Card appearance="filled" className="flex-1 flex flex-col gap-2">
              <Headline size="small">Daewoo Nexia</Headline>
              <Body>
                The Daewoo Nexia Sedan is a simple and cheap car. Experts
                attribute considerable popularity of Nexia Daewoo in the market
                of the Russian Federation to rather competitive price tags,
                which have always been.
              </Body>
              <div className="flex justify-between items-center border-t border-light-outlineVariant dark:border-dark-outlineVariant py-2 mt-auto">
                <Title size="large">1000 $</Title>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button appearance="filled">Buy</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Cringe alert!</DialogTitle>
                    <DialogDescription>
                      Nah bro, you don not need this car at all
                    </DialogDescription>
                    <DialogActionButtonContainer>
                      <DialogActionButton>Close</DialogActionButton>
                      <DialogActionButton>Do not buy</DialogActionButton>
                    </DialogActionButtonContainer>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </main>
  )
}
