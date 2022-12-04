import { ReactElement } from 'react'

import { SectionHeaderContainer } from './styles'

interface StepSectionHeaderProps {
  icon: ReactElement
  title: string
  subtitle: string
}

export function StepSectionHeader({
  icon,
  title,
  subtitle,
}: StepSectionHeaderProps) {
  return (
    <SectionHeaderContainer>
      {icon}

      <div>
        <h3>{title}</h3>
        <span>{subtitle}</span>
      </div>
    </SectionHeaderContainer>
  )
}
