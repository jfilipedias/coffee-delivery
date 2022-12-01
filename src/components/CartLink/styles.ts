import styled from 'styled-components'

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['yellow-200']};
  color: ${(props) => props.theme.colors['yellow-700']};

  &:hover {
    cursor: pointer;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    right: -0.5rem;
    top: -0.5rem;
    background: ${(props) => props.theme.colors['yellow-700']};
    border-radius: 1000px;
    color: ${(props) => props.theme.colors.white};
    font-size: 0.75rem;
    font-weight: 700;
  }
`
