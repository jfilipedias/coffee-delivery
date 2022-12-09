import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  gap: 6.5rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme.colors['yellow-700']};
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  margin-top: 2.5rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors['gray-100']};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  div:nth-of-type(1) div:first-of-type {
    background: ${(props) => props.theme.colors['purple-700']};
  }

  div:nth-of-type(2) div:first-of-type {
    background: ${(props) => props.theme.colors['yellow-500']};
  }

  div:nth-of-type(3) div:first-of-type {
    background: ${(props) => props.theme.colors['yellow-700']};
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  border-radius: 100px;
  color: ${(props) => props.theme.colors.white};
`

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
`
