import styled from 'styled-components'

export const RadioButtonContainer = styled.div`
  display: flex;

  input {
    visibility: hidden;
    appearance: none;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 1rem;
    background: ${(props) => props.theme.colors['gray-400']};
    border: 1px solid ${(props) => props.theme.colors['gray-400']};
    border-radius: 6px;
    font-size: 0.75rem;
    text-transform: uppercase;
    transition: 0.1s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors['gray-500']};
      border: 1px solid ${(props) => props.theme.colors['gray-500']};
    }

    svg {
      color: ${(props) => props.theme.colors['purple-500']};
    }
  }

  input:checked + label {
    background: ${(props) => props.theme.colors['purple-200']};
    border: 1px solid ${(props) => props.theme.colors['purple-500']};

    &:hover {
      background: ${(props) => props.theme.colors['purple-200']};
    }
  }
`
