import styled from 'styled-components'

export const StepSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['gray-200']};

  & + section {
    margin-top: 0.75rem;
  }
`
