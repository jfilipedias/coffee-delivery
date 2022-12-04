import styled from 'styled-components'

export const SectionHeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  h3 {
    font-weight: 400;
    color: ${(props) => props.theme.colors['gray-800']};
  }

  span {
    color: ${(props) => props.theme.colors['gray-700']};
    font-size: 0.875rem;
  }
`
