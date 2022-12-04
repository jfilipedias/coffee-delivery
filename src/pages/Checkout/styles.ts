import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2.5rem auto;
  width: 100%;
  max-width: 90rem;
`

export const FormStep = styled.div`
  &:first-of-type {
    width: 40rem;
  }

  &:last-of-type {
    width: 28rem;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors['gray-800']};
  }
`

export const StepSection = styled.section`
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['gray-200']};

  & + section {
    margin-top: 0.75rem;
  }
`

export const ConfirmStepSection = styled(StepSection)`
  border-radius: 6px 44px;

  button {
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
  }
`

export const SectionHeader = styled.div`
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
