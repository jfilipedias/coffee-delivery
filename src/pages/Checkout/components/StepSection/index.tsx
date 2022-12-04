import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

import { StepSectionContainer } from './styles'

interface StepSectionProps {
  children: ReactNode
  style?: CSSProperties
}

export function StepSection({ children, style }: StepSectionProps) {
  return <StepSectionContainer style={style}>{children}</StepSectionContainer>
}
