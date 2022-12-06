import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['gray-400']};

  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['yellow-700']};
  }

  button,
  input {
    background: transparent;
    border: none;
  }

  button {
    color: ${(props) => props.theme.colors['purple-500']};
    transition: 0.1s;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors['purple-700']};
    }

    &:focus {
      box-shadow: none;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  input {
    width: 1.25rem;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    &:focus {
      box-shadow: none;
    }
  }
`
