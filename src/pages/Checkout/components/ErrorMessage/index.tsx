import { ReactNode } from 'react'

interface ErrorMessageProps {
  children: ReactNode
}

export function ErrorMessage({ children }: ErrorMessageProps) {
  return <span>{children}</span>
}
