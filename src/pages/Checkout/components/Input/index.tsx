import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'

import { FieldContainer, InputContainer } from './Styles'
import { ErrorMessage } from '../ErrorMessage'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean
  label?: string
  error?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { id, className, isOptional, label, error, ...rest },
  ref,
) => {
  return (
    <FieldContainer className={className}>
      {label && <label htmlFor={id} hidden />}

      <InputContainer>
        <input id={id} ref={ref} {...rest} />
        {isOptional && <span>Opcional</span>}
      </InputContainer>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  )
}

export const Input = forwardRef(InputBase)
