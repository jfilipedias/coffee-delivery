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
> = ({ id, icon, label }, ref) => {
  return (
    <RadioButtonContainer>
      <input id={id} type="radio" name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        {icon}
        {label}
      </label>
    </RadioButtonContainer>
  )
}

export const PaymentMethodButton = forwardRef(ButtonBase)
