import { InputHTMLAttributes } from 'react'
import { InputContainer } from './Styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export function Input({ className, label, required, id, ...rest }: InputProps) {
  return (
    <InputContainer className={className}>
      {label && <label htmlFor={id}></label>}
      <input id={id} required {...rest} />
      {!required && <span>Opcional</span>}
    </InputContainer>
  )
}
