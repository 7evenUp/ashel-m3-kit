"use client"

import { useState } from "react"
import { Minus, Plus } from "iconoir-react"

import Label from "@/shared/typography/Label"
import Switch from "@/shared/ui/Switch"

const SwitchExample = () => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <>
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
    </>
  )
}

export default SwitchExample
