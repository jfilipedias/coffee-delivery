import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90rem;
  margin: auto;
  padding: 2rem 10rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
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

export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['yellow-200']};
  color: ${(props) => props.theme.colors['yellow-700']};

  &:hover {
    cursor: pointer;
  }
`
