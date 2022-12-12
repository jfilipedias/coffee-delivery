import styled from 'styled-components'

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.75rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 0.75rem;
  }
`
