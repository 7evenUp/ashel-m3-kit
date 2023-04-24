import { FC, ReactNode } from "react"

interface InputProps {
  label: string
  id: string
  value: string
  onChange: (evt: React.FormEvent<HTMLInputElement>) => void
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

const FilledTextInput: FC<InputProps> = ({
  label,
  id,
  value,
  onChange,
  leadingIcon,
  trailingIcon,
}) => {
  return (
    <label
      htmlFor={id}
      className="bg-light-surfaceVariant dark:bg-dark-surfaceVariant flex flex-col-reverse border-b border-light-outline dark:border-dark-outline rounded-t py-2 px-6 focus-within:border-light-primary focus-within:dark:border-dark-primary focus-within:border-b-2"
    >
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="peer caret-light-primary dark:caret-dark-primary text-light-onSurface dark:text-dark-onSurface bg-transparent outline-none text-base leading-6 tracking-[0.5px]"
      />
      <LabelText label={label} />
    </label>
  )
}

const LabelText = ({ label }: Pick<InputProps, "label">) => (
  <span className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant peer-focus:text-light-primary dark:peer-focus:text-dark-primary text-xs leading-4 tracking-[0.4px]">
    {label}
  </span>
)

export default FilledTextInput
