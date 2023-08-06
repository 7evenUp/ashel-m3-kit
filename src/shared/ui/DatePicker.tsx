"use client"

import * as React from "react"
import { CaptionProps, DayPicker, useNavigation } from "react-day-picker"
import { format, addYears, subYears } from "date-fns"
import { NavArrowLeft, NavArrowRight } from "iconoir-react"

import Button from "./Button"

import { cn } from "@/lib/cn"

const CustomCaption = ({ displayMonth }: CaptionProps) => {
  const { goToMonth, currentMonth, previousMonth, nextMonth } = useNavigation()

  return (
    <div className="flex items-center justify-between text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant">
      <div className="flex items-center justify-between min-w-[120px]">
        <button
          disabled={!previousMonth}
          onClick={() => previousMonth && goToMonth(previousMonth)}
        >
          <NavArrowLeft className="h-6 w-6" />
        </button>
        {format(displayMonth, "MMM")}

        <button
          disabled={!nextMonth}
          onClick={() => nextMonth && goToMonth(nextMonth)}
        >
          <NavArrowRight className="h-6 w-6" />
        </button>
      </div>
      <div className="flex items-center justify-between min-w-[120px]">
        <button
          disabled={!previousMonth}
          onClick={() => goToMonth(subYears(currentMonth, 1))}
        >
          <NavArrowLeft className="h-6 w-6" />
        </button>
        {format(displayMonth, "yyy")}

        <button
          disabled={!nextMonth}
          onClick={() => goToMonth(addYears(currentMonth, 1))}
        >
          <NavArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export type DatePickerProps = React.ComponentProps<typeof DayPicker> & {
  onSubmit?: () => void
  onCancel?: () => void
  customFooter?: React.ReactNode
}

const DatePicker = ({
  className,
  classNames,
  showOutsideDays = true,
  onSubmit,
  onCancel,
  customFooter,
  ...props
}: DatePickerProps) => {
  const footer =
    (
      <div className="flex justify-end items-center gap-2 mt-2">
        <Button appearance="text" onClick={onCancel}>
          Отмена
        </Button>
        <Button appearance="text" onClick={onSubmit}>
          OK
        </Button>
      </div>
    ) || customFooter

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "w-[328px] min-h-[428px] pt-5 pb-3 px-3 bg-light-surfaceContainerHigh dark:bg-dark-surfaceContainerHigh rounded-large",
        className
      )}
      classNames={{
        months: "flex",
        month: "w-full",
        table: "w-full border-collapse mt-[30px]",
        head_row: "flex h-10 items-center justify-around",
        head_cell:
          "text-light-onSurface dark:text-dark-onSurface p-0 font-normal text-base tracking-[0.5px] w-10 h-10",
        row: "flex justify-around w-full mt-2",
        cell: "text-center text-base tracking-[0.5px] rounded-full p-0 relative [&:has([aria-selected])]:bg-light-primary dark:[&:has([aria-selected])]:bg-dark-primary [&:has([aria-selected])]:text-light-onPrimary dark:[&:has([aria-selected])]:text-dark-onPrimary focus-within:relative focus-within:z-20",
        day: cn(
          "h-10 w-10 rounded-full aria-selected:opacity-100 hover:bg-light-secondary hover:text-light-onSecondary dark:hover:bg-dark-secondary dark:hover:text-dark-onSecondary hover:opacity-50 dark:hover:opacity-70 transition-all"
        ),
        day_selected:
          "rounded-full bg-light-primary dark:bg-dark-primary text-light-onPrimary dark:text-dark-onPrimary focus:bg-light-primary dark:focus:bg-dark-primary focus:text-light-onPrimary dark:focus:text-dark-onPrimary",
        day_today:
          "text-light-primary dark:text-dark-primary border border-light-primary dark:border-dark-primary rounded-full",
        day_outside:
          "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant opacity-80",
        day_disabled:
          "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant opacity-40",
        day_range_middle:
          "aria-selected:bg-light-primary dark:aria-selected:bg-dark-primary aria-selected:text-light-onPrimary dark:aria-selected:text-dark-onPrimary",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Caption: CustomCaption,
      }}
      footer={footer}
      {...props}
    />
  )
}
DatePicker.displayName = "DatePicker"

export default DatePicker
