"use client"

import React, { useState } from "react"
import { Calendar, NavArrowDown } from "iconoir-react"

import Label from "@/shared/typography/Label"

import FilterChip from "@/shared/ui/Chips/FilterChip"

const FilterChipExample = () => {
  const [el1, setEl1] = useState(false)
  const [el2, setEl2] = useState(false)
  const [el3, setEl3] = useState(false)
  const [el4, setEl4] = useState(false)
  const [out1, setOut1] = useState(false)
  const [out2, setOut2] = useState(false)
  const [out3, setOut3] = useState(false)
  const [out4, setOut4] = useState(false)

  return (
    <div className="w-fit grid grid-rows-3 grid-cols-5 gap-2">
      <Label size="large" className="col-start-2 place-self-center">
        Без иконки
      </Label>
      <Label size="large" className="place-self-center">
        Leading icon
      </Label>
      <Label size="large" className="place-self-center">
        Trailing icon
      </Label>
      <Label size="large" className="place-self-center">
        Обе иконки
      </Label>
      <Label size="large" className="place-self-center">
        Elevated
      </Label>
      <FilterChip
        className="place-self-center"
        appearance="elevated"
        pressed={el1}
        onPressedChange={setEl1}
      >
        Elevated
      </FilterChip>
      <FilterChip
        className="place-self-center"
        appearance="elevated"
        leadingIcon={<Calendar width={18} height={18} />}
        pressed={el2}
        onPressedChange={setEl2}
      >
        Elevated
      </FilterChip>
      <FilterChip
        className="place-self-center"
        appearance="elevated"
        trailingIcon={<NavArrowDown width={18} height={18} />}
        pressed={el3}
        onPressedChange={setEl3}
      >
        Elevated
      </FilterChip>
      <FilterChip
        className="place-self-center"
        appearance="elevated"
        leadingIcon={<Calendar width={18} height={18} />}
        trailingIcon={<NavArrowDown width={18} height={18} />}
        pressed={el4}
        onPressedChange={setEl4}
      >
        Elevated
      </FilterChip>
      <Label size="large" className="place-self-center">
        Outlined
      </Label>
      <FilterChip
        className="place-self-center"
        appearance="outlined"
        pressed={out1}
        onPressedChange={setOut1}
      >
        Outlined
      </FilterChip>
      <FilterChip
        className="place-self-center"
        appearance="outlined"
        leadingIcon={<Calendar width={18} height={18} />}
        pressed={out2}
        onPressedChange={setOut2}
      >
        Outlined
      </FilterChip>
      <FilterChip
        className="place-self-center"
        appearance="outlined"
        trailingIcon={<NavArrowDown width={18} height={18} />}
        pressed={out3}
        onPressedChange={setOut3}
      >
        Outlined
      </FilterChip>
      <FilterChip
        className="place-self-center"
        appearance="outlined"
        leadingIcon={<Calendar width={18} height={18} />}
        trailingIcon={<NavArrowDown width={18} height={18} />}
        pressed={out4}
        onPressedChange={setOut4}
      >
        Outlined
      </FilterChip>
    </div>
  )
}

export default FilterChipExample
