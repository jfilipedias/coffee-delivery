import styled from 'styled-components'

export const CoffeeSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.875rem;
  width: 100%;
  max-width: 90rem;
  margin: auto;
  padding: 2rem 3.5rem 10rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 2rem 6rem 10rem;
  }

  @media (min-width: ${(props) => props.theme.screen.xl}) {
    padding: 2rem 10rem 10rem;
  }
`

export const CoffeeSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    align-items: center;
    flex-direction: row;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
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
  grid-template-columns: 1fr;
  grid-gap: 2.5rem 3rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2.5rem 2rem;
  }

  @media (min-width: ${(props) => props.theme.screen.xl}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
