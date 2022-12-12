import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

import { FormStepContainer } from './styles'

interface FormStepProps {
  title: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function FormStep({ title, style, className, children }: FormStepProps) {
  return (
    <FormStepContainer style={style} className={className}>
      <h2>{title}</h2>

      {children}
    </FormStepContainer>
  )
}
