import styled from 'styled-components'

export const ConfirmCartFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const Divider = styled.span`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors['gray-400']};
`

export const TotalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  width: 100%;
`

export const PriceTotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  strong {
    font-size: 1.25rem;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['yellow-500']};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.1s;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.colors['yellow-700']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`
