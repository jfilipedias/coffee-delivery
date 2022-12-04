import { InputHTMLAttributes, ReactElement } from 'react'

import { RadioButtonContainer } from './styles'

type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactElement
  label: string
}

export function RadioButton({ id, icon, label }: RadioButtonProps) {
  return (
    <RadioButtonContainer>
      <input id={id} type="radio" />
      <label htmlFor={id}>{label}</label>
    </RadioButtonContainer>
  )
}
