import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

import { FormStepContainer } from './styles'

interface FormStepProps {
  title: string
  style: CSSProperties
  children: ReactNode
}

export function FormStep({ title, style, children }: FormStepProps) {
  return (
    <FormStepContainer style={style}>
      <h2>{title}</h2>

      {children}
    </FormStepContainer>
  )
}
