import styled from 'styled-components'

interface FilterContainerProps {
  isActive: boolean
}

export const FilterContainer = styled.button<FilterContainerProps>`
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border: 1px solid ${(props) => props.theme.colors['yellow-500']};
  border-radius: 100px;
  background: ${(props) =>
    props.isActive ? props.theme.colors['yellow-500'] : 'transparent'};
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.white
      : props.theme.colors['yellow-700']};
  font-weight: 700;
  font-size: 0.625rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease;
`
