import React, { FC, InputHTMLAttributes, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import Body from "@/components/typography/Body"

interface InputProps {
  label: string
  id: string
  value: string
  onChange: (evt: React.FormEvent<HTMLInputElement>) => void
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

const FilledTextInput: FC<Props> = ({
  label,
  leadingIcon,
  trailingIcon,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-fit">
      <div className="relative h-[56px] bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-t border-b border-light-onSurfaceVariant dark:border-dark-onSurfaceVariant focus-within:border-b-2 focus-within:border-light-primary dark:focus-within:border-dark-primary">
        <input
          className="peer opacity-100 placeholder-shown:opacity-0 focus:opacity-100 text-light-onSurface dark:text-dark-onSurface pt-6 px-4 pb-2 outline-none text-base tracking-[0.5px] bg-transparent caret-light-primary dark:caret-dark-primary"
          placeholder="&nbsp;"
          {...props}
        />
        <label
          className="absolute pointer-events-none text-xs tracking-[0.4px] left-4 translate-y-2 peer-placeholder-shown:translate-y-4 transition-all peer-focus:translate-y-2 peer-focus:text-xs peer-focus:tracking-[0.4px] peer-focus:text-light-primary dark:peer-focus:text-dark-primary peer-placeholder-shown:text-base peer-placeholder-shown:tracking-[0.5px]"
        >
          {label}
        </label>
      </div>
      <div className="flex items-center gap-4 px-4">
        <Body
          size="small"
          className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
        >
          Supporting text
        </Body>
        <Body size="small" className="ml-auto">
          5/20
        </Body>
      </div>
    </div>
  )
}

export default FilledTextInput
