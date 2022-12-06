import styled from 'styled-components'

export const ConfirmCartFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const Divider = styled.span`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors['gray-400']};
`
