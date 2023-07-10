"use client"

import { useEffect, useState } from "react"

import Body from "@/shared/typography/Body"
import { SegmentedButton, SegmentedRoot } from "@/shared/ui/SegmentedButton"

type currencies = "usd" | "try" | "cny"

const RUB_TO_CURRENCIES = {
  usd: 0.013,
  try: 0.25,
  cny: 0.089,
}

const SYMBOL_TO_CURRENCIES = {
  usd: "$",
  try: "₺",
  cny: "¥",
}

const SegmentedButtonsWithState = () => {
  const [result, setResult] = useState(0)
  const [currency, setCurrency] = useState<currencies>("usd")

  useEffect(() => {
    setResult(1000 * RUB_TO_CURRENCIES[currency])
  }, [currency])

  return (
    <>
      <SegmentedRoot
        className="w-[500px]"
        type="single"
        value={currency}
        onValueChange={(value: currencies) => value && setCurrency(value)}
      >
        <SegmentedButton name="currency" value="try">
          Лира
        </SegmentedButton>
        <SegmentedButton name="currency" value="usd">
          Доллары
        </SegmentedButton>
        <SegmentedButton name="currency" value="cny">
          Юань
        </SegmentedButton>
      </SegmentedRoot>

      <Body className="w-[500px] text-center">
        1000 рублей = {result}
        {SYMBOL_TO_CURRENCIES[currency]}
      </Body>
    </>
  )
}

export default SegmentedButtonsWithState
