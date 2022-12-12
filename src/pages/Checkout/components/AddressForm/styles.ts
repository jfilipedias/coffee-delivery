import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1rf;
  grid-column-gap: 0.75rem;
  grid-row-gap: 1rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-template-columns: 12.5rem auto 3.75rem;

    .zip-code {
      max-width: 12.5rem;
    }

    .grid-col-span-3 {
      grid-column: span 3;
    }

    .grid-col-span-2 {
      grid-column: span 2;
    }
  }
`
