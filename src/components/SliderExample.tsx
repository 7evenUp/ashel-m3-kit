"use client"

import React, { useState } from "react"

import Subheading from "./Subheading"

import { Slider } from "@/shared/ui/Slider"
import Title from "@/shared/typography/Title"

const SliderExample = () => {
  const [oneHandle, setOneHandle] = useState([30])
  const [twoHandles, setTwoHandles] = useState([10, 50])

  return (
    <div className="flex flex-col gap-3">
      <Subheading>С одним ползунком</Subheading>
      <div className="flex items-center justify-between w-[300px]">
        <Title>С label</Title>
        <Slider value={oneHandle} onValueChange={setOneHandle} />
      </div>

      <div className="flex items-center justify-between w-[300px]">
        <Title>Без label</Title>
        <Slider defaultValue={[60]} showLabel={false} />
      </div>

      <Subheading>С двумя ползунками</Subheading>
      <Slider value={twoHandles} onValueChange={setTwoHandles} />
    </div>
  )
}

export default SliderExample
