import { InputHTMLAttributes, ReactElement } from 'react'

import { RadioButtonContainer } from './styles'

type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactElement
  label: string
}

export function PaymentMethodButton({ id, icon, label }: RadioButtonProps) {
  return (
    <RadioButtonContainer>
      <input id={id} type="radio" name="paymentMethod" />
      <label htmlFor={id}>
        {icon}
        {label}
      </label>
    </RadioButtonContainer>
  )
}
