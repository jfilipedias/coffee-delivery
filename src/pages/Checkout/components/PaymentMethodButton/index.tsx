import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
} from 'react'

import { RadioButtonContainer } from './styles'

type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactElement
  label: string
}

const ButtonBase: ForwardRefRenderFunction<
  HTMLInputElement,
  RadioButtonProps
> = ({ id, icon, label, ...rest }, ref) => {
  return (
    <RadioButtonContainer>
      <input id={id} type="radio" ref={ref} {...rest} />
      <label htmlFor={id}>
        {icon}
        {label}
      </label>
    </RadioButtonContainer>
  )
}

export const PaymentMethodButton = forwardRef(ButtonBase)
