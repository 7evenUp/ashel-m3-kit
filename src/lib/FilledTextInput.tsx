import React, { FC, InputHTMLAttributes, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import Body from "@/components/typography/Body"
import { cn } from "@/utils/classNames"
import UIStateLayer from "@/components/ui/UIStateLayer"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  supportingText?: string
  supportingTextCharCount?: string
}

const FilledTextInput: FC<Props> = ({
  label,
  leadingIcon,
  trailingIcon,
  supportingText,
  supportingTextCharCount,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-1 w-fit", className)}>
      <div className="group relative h-[56px] bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-t border-b border-light-onSurfaceVariant dark:border-dark-onSurfaceVariant focus-within:border-b-2 focus-within:border-light-primary dark:focus-within:border-dark-primary flex hover:border-light-onSurface dark:hover:border-dark-onSurface focus-within:hover:border-light-primary dark:focus-within:hover:border-dark-primary">
        <UIStateLayer className="bg-light-onSurface dark:bg-dark-onSurface group-active:bg-opacity-[0.08] focus-within:group-hover:bg-opacity-0">
          {leadingIcon && (
            <span className="absolute left-3 top-4">{leadingIcon}</span>
          )}
          {trailingIcon && (
            <span className="absolute right-3 top-4">{trailingIcon}</span>
          )}
          <input
            className={cn(
              "peer opacity-100 placeholder-shown:opacity-0 focus:opacity-100 text-light-onSurface dark:text-dark-onSurface pt-6 px-4 pb-2 outline-none text-base tracking-[0.5px] bg-transparent caret-light-primary dark:caret-dark-primary placeholder:text-light-onSurfaceVariant dark:placeholder:text-dark-onSurfaceVariant",
              leadingIcon && "pl-[52px]",
              trailingIcon && "pr-[52px]"
            )}
            placeholder="&nbsp;"
            {...props}
          />
          <label
            className={cn(
              "absolute pointer-events-none text-xs tracking-[0.4px] left-4 translate-y-2 peer-placeholder-shown:translate-y-4 transition-all peer-focus:translate-y-2 peer-focus:text-xs peer-focus:tracking-[0.4px] peer-focus:text-light-primary dark:peer-focus:text-dark-primary peer-placeholder-shown:text-base peer-placeholder-shown:tracking-[0.5px]",
              leadingIcon && "left-[52px]"
            )}
          >
            {label}
          </label>
        </UIStateLayer>
      </div>
      {supportingText && (
        <div className="flex items-center gap-4 px-4 text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant">
          <Body size="small">{supportingText}</Body>
          {supportingTextCharCount && (
            <Body size="small" className="ml-auto">
              {supportingTextCharCount}
            </Body>
          )}
        </div>
      )}
    </div>
  )
}

export default FilledTextInput
