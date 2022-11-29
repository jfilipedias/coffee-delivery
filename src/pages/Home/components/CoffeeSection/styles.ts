import styled from 'styled-components'

export const CoffeeSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.875rem;
  width: 100%;
  max-width: 90rem;
  margin: auto;
  padding: 2rem 10rem 10rem;
`

export const CoffeeSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-family: 800;
    color: ${(props) => props.theme.colors['gray-800']};
  }
`

export const FiltersContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  li {
    list-style: none;
  }
`

export const CoffeesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.5rem 2rem;
`
