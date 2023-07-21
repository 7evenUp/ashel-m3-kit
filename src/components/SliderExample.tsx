"use client"

import React, { useState } from "react"

import Subheading from "./Subheading"

import { Slider } from "@/shared/ui/Slider"
import Title from "@/shared/typography/Title"

const SliderExample = () => {
  const [oneHandle, setOneHandle] = useState([30])
  const [twoHandles, setTwoHandles] = useState([10, 50])
  const [withMarks, setWithMarks] = useState([40])
  const [twoWithMarks, setTwoWithMarks] = useState([18, 28])

  return (
    <div className="flex flex-col gap-3">
      <Subheading>С одним ползунком</Subheading>
      <div className="flex items-center justify-between w-[350px]">
        <Title>С меткой</Title>
        <Slider value={oneHandle} onValueChange={setOneHandle} />
      </div>

      <div className="flex items-center justify-between w-[350px]">
        <Title>Без метки</Title>
        <Slider defaultValue={[60]} showLabel={false} />
      </div>

      <div className="flex items-center justify-between w-[350px]">
        <Title>С делениями</Title>
        <Slider
          value={withMarks}
          onValueChange={setWithMarks}
          withMarks={true}
          step={2}
          min={14}
          max={30}
        />
      </div>

      <Subheading>С двумя ползунками</Subheading>
      <div className="flex items-center justify-between w-[350px]">
        <Title>С метками</Title>
        <Slider value={twoHandles} onValueChange={setTwoHandles} />
      </div>

      <div className="flex items-center justify-between w-[350px]">
        <Title>Без меток</Title>
        <Slider defaultValue={[55, 95]} showLabel={false} />
      </div>

      <div className="flex items-center justify-between w-[350px]">
        <Title>С делениями</Title>
        <Slider
          value={twoWithMarks}
          onValueChange={setTwoWithMarks}
          withMarks={true}
          step={2}
          min={14}
          max={30}
        />
      </div>
      
    </div>
  )
}

export default SliderExample
