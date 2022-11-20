import {
  BackgroundContainer,
  HeroSection,
  HomeContainer,
  HeroContent,
  TitleContainer,
} from './styles'
import HeroImage from '../../assets/hero.png'

export function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <BackgroundContainer />

        <main>
          <HeroContent>
            <TitleContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </TitleContainer>

            <div></div>
          </HeroContent>

          <img
            src={HeroImage}
            alt="Image de um copo de café com a logo do coffee delivery rodeado por grãos de café"
          />
        </main>
      </HeroSection>
    </HomeContainer>
  )
}
