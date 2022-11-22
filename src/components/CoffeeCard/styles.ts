import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19rem;
  padding: 1.25rem 1.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors['gray-300']};

  img {
    margin-top: -2.5rem;
  }

  h3 {
    margin-top: 1rem;
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors['gray-800']};
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme.colors['gray-600']};
  }
`

export const TagsList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
`

export const TagContainer = styled.span`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background: ${(props) => props.theme.colors['yellow-200']};
  font-weight: 700;
  font-size: 0.625rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['yellow-700']};
`

export const PriceContainer = styled.div``
