"use client";

import Heading from "@/components/Heading";
import Body from "@/components/ui/text/Body";
import Display from "@/components/ui/text/Display";
import { SegmentedButton, SegmentedRoot } from "@/lib/SegmentedButton";
import { useEffect, useState } from "react";

type currencies = "usd" | "try" | "cny";

const RUB_TO_CURRENCIES = {
  usd: 0.013,
  try: 0.25,
  cny: 0.089,
};

const SYMBOL_TO_CURRENCIES = {
  usd: "$",
  try: "₺",
  cny: "¥",
};

const SegmentedButtonsPage = () => {
  const [result, setResult] = useState(0);
  const [currency, setCurrency] = useState<currencies>("usd");

  useEffect(() => {
    setResult(1000 * RUB_TO_CURRENCIES[currency]);
  }, [currency]);

  return (
    <div>
      <Display className="mb-4">Segmented Buttons</Display>

      <div className="flex flex-col items-start gap-2">
        <Heading>Примеры</Heading>

        <SegmentedRoot
          className="w-[500px]"
          type="single"
          value={currency}
          onValueChange={(value: currencies) => value && setCurrency(value)}
        >
          <SegmentedButton
            id="try"
            name="currenry"
            value="try"
            onChange={() => setCurrency("try")}
          >
            Лира
          </SegmentedButton>
          <SegmentedButton
            id="usd"
            name="currenry"
            value="usd"
            onChange={() => setCurrency("usd")}
          >
            Доллары
          </SegmentedButton>
          <SegmentedButton
            id="cny"
            name="currenry"
            value="cny"
            onChange={() => setCurrency("cny")}
          >
            Юань
          </SegmentedButton>
        </SegmentedRoot>

        <Body>
          1000 рублей = {result}
          {SYMBOL_TO_CURRENCIES[currency]}
        </Body>
      </div>
    </div>
  );
};

export default SegmentedButtonsPage;
