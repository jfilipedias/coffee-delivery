import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90rem;
  margin: auto;
  top: 50%;
  padding: 2rem 3.5rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 2rem 6rem;
  }

  @media (min-width: ${(props) => props.theme.screen.xl}) {
    padding: 2rem 10rem;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['purple-200']};
  color: ${(props) => props.theme.colors['purple-700']};
  font-size: 0.875rem;
`
