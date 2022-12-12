import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2.5rem auto;
  padding: 0 3.5rem;
  width: 100%;
  max-width: 90rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    flex-direction: row;
    justify-content: center;
    padding: 0;

    .lg {
      width: 32rem;
    }

    .md {
      width: 24rem;
    }
  }

  @media (min-width: ${(props) => props.theme.screen.xl}) {
    .lg {
      width: 40rem;
    }

    .md {
      width: 28rem;
    }
  }
`
