import { ReactNode } from 'react'

import { ErrorMessageContainer } from './styles'

interface ErrorMessageProps {
  children: ReactNode
}

export function ErrorMessage({ children }: ErrorMessageProps) {
  return <ErrorMessageContainer>{children}</ErrorMessageContainer>
}
