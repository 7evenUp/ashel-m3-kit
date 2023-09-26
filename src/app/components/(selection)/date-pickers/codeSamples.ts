export const usageSimpleCode = `"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar } from "iconoir-react"
import * as Popover from "@radix-ui/react-popover"

import DatePicker from "@/shared/ui/DatePicker"
import OutlinedTextField from "@/shared/ui/OutlinedTextField"

const DatePickerExample = () => {
  const [selected, setSelected] = useState<Date>()
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState("")

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger>
        <OutlinedTextField
          label="Date"
          trailingIcon={<Calendar />}
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="start" sideOffset={8}>
          <DatePicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            onCancel={() => setIsOpen(false)}
            onSubmit={() => {
              selected && setDate(format(selected, "dd/MM/yyyy"))
              setIsOpen(false)
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default DatePickerExample`