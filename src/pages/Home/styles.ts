import styled from 'styled-components'

import BackgroundImage from '../../assets/background.svg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 34rem;

  main {
    display: flex;
    align-items: center;
    gap: 3.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 90rem;
    margin: auto;
    padding: 5.75rem 10rem;
  }
`

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(80px);
`

export const HeroContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4.125rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.875rem;
    color: ${(props) => props.theme.colors['gray-900']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme.colors['gray-800']};
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  grid-gap: 2.5rem 1.25rem;

  div:nth-of-type(1) div {
    background: ${(props) => props.theme.colors['yellow-700']};
  }

  div:nth-of-type(2) div {
    background: ${(props) => props.theme.colors['gray-700']};
  }

  div:nth-of-type(3) div {
    background: ${(props) => props.theme.colors['yellow-500']};
  }

  div:nth-of-type(4) div {
    background: ${(props) => props.theme.colors['purple-500']};
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
