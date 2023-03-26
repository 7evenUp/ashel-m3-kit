"use client";

import Heading from "@/components/Heading";
import InlineLink from "@/components/InlineLink";
import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";
import Label from "@/components/ui/text/Label";
import Switch from "@/lib/Switch";
import { Minus, Plus } from "iconoir-react";
import { useState } from "react";

const SwitchPage = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div>
      <Display className="mb-4">Switch</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Switch включает или выключает состояние отдельного элемента. Подробнее
          на{" "}
          <InlineLink href="https://m3.material.io/components/switch/overview">
            официальном сайте
          </InlineLink>
        </Paragraph>

        <Heading>Примеры</Heading>

        <div className="flex items-center justify-between max-w-[400px]">
          <Label size="large" className="mt-3 mb-2">
            Без иконок
          </Label>
          <Switch
            selected={isSelected}
            onChange={() => setIsSelected(!isSelected)}
          />
        </div>

        <div className="flex items-center justify-between max-w-[400px]">
          <Label size="large" className="mt-3 mb-2">
            С иконкой в состоянии selected
          </Label>
          <Switch
            selected={isSelected}
            onChange={() => setIsSelected(!isSelected)}
            icon={<Plus />}
          />
        </div>

        <div className="flex items-center justify-between max-w-[400px]">
          <Label size="large" className="mt-3 mb-2">
            С иконками в обоих состояниях
          </Label>
          <Switch
            selected={isSelected}
            onChange={() => setIsSelected(!isSelected)}
            icon={<Plus />}
            unselectedIcon={<Minus />}
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchPage;
