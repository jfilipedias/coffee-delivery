import styled from 'styled-components'

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

interface InputContainerProps {
  hasError: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  padding: 0.75rem;
  border: 1px solid
    ${(props) =>
      props.hasError
        ? props.theme.colors['red-200']
        : props.theme.colors['gray-400']};
  border-radius: 4px;
  background: ${(props) => props.theme.colors['gray-300']};
  color: ${(props) => props.theme.colors['gray-700']};
  font-size: 0.875rem;

  &:focus-within {
    box-shadow: none;
    border-color: ${(props) => props.theme.colors['yellow-700']};
  }

  input {
    width: 100%;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.colors['gray-700']};

    &:placeholder {
      color: ${(props) => props.theme.colors['gray-600']};
    }

    &:focus {
      box-shadow: none;
    }
  }

  input[type='number'] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  span {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    color: ${(props) => props.theme.colors['gray-600']};
    font-size: 0.875rem;
    font-style: italic;
  }
`
