import { InputHTMLAttributes } from 'react'
import { ErrorMessage } from '../ErrorMessage'
import { FieldContainer, InputContainer } from './Styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export function Input({
  id,
  className,
  label,
  required,
  error,
  ...rest
}: InputProps) {
  return (
    <FieldContainer>
      {label && <label htmlFor={id} hidden />}

      <InputContainer className={className}>
        <input id={id} required {...rest} />
        {!required && <span>Opcional</span>}
      </InputContainer>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  )
}
