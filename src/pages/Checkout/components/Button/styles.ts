import styled from 'styled-components'

export const ButtonContainer = styled.button`
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
  transition: background-color 0.1s ease;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-700']};
  }
`
