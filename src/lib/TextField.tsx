import { cn } from '@/utils/classNames'
import React, { FC, HTMLAttributes } from 'react'

const Root = React.forwardRef<HTMLLabelElement, HTMLAttributes<HTMLLabelElement>>(({children, ...props}, forwardedRef) => {
  return (
    <label className={cn("")} {...props} ref={forwardedRef}>{children}</label>
  )
})
Root.displayName = 'TextFieldRoot'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label: string
}
const Input: FC<InputProps> = ({label, children}) => {
  return (
    <div>
      <span>{label}</span>
      <input />
    </div>
  )
}

// const LeadingIcon = () => {
//   return (
//     <>
//     {children}
//     </>
//   )
// }

// const TrailingIcon = () => {
//   return (
//     <>
//     {children}
//     </>
//   )
// }

// const SupportingText = () => {
//   return (
    
//   )
// }

// export { Root, SupportingText }