import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme.colors['gray-800']};
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['gray-400']};
  color: ${(props) => props.theme.colors['gray-700']};
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.1s;

  svg {
    color: ${(props) => props.theme.colors['purple-500']};
  }

  &:hover {
    background: ${(props) => props.theme.colors['gray-500']};
    color: ${(props) => props.theme.colors['gray-800']};

    svg {
      color: ${(props) => props.theme.colors['purple-700']};
    }
  }
`
