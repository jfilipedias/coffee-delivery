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
  height: 52rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    height: 48rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    flex-direction: row;
    height: 34rem;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    transform: translate(0, -90%);
    gap: 3.5rem;
    width: 100%;
    max-width: 90rem;
    padding: 5.75rem 3.5rem;

    @media (max-width: ${(props) => props.theme.screen.sm}) {
      gap: 3.5rem;

      img {
        width: 360px;
      }
    }

    @media (min-width: ${(props) => props.theme.screen.lg}) {
      flex-direction: row;
      gap: 3.5rem;
      top: 50%;
      transform: translate(0, -50%);
      padding: 5.75rem 6rem;
    }

    @media (min-width: ${(props) => props.theme.screen.xl}) {
      padding: 5.75rem 10rem;
    }
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
  gap: 3rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    gap: 4.125rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 3rem;
    color: ${(props) => props.theme.colors['gray-900']};

    @media (min-width: ${(props) => props.theme.screen.xl}) {
      font-size: 3rem;
      line-height: 3.875rem;
    }
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
