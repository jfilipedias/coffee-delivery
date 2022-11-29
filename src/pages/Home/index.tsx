import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  BackgroundContainer,
  HeroSection,
  HomeContainer,
  HeroContent,
  TitleContainer,
  ItemsContainer,
  ItemIcon,
  Item,
} from './styles'
import { CoffeeSection } from './components/CoffeeSection'
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

            <ItemsContainer>
              <Item>
                <ItemIcon>
                  <ShoppingCart size={16} weight="fill" />
                </ItemIcon>

                <span>Compra simples e segura</span>
              </Item>

              <Item>
                <ItemIcon>
                  <Package size={16} weight="fill" />
                </ItemIcon>

                <span>Embalagem mantém o café intacto</span>
              </Item>

              <Item>
                <ItemIcon>
                  <Timer size={16} weight="fill" />
                </ItemIcon>

                <span>Entrega rápida e rastreada</span>
              </Item>

              <Item>
                <ItemIcon>
                  <Coffee size={16} weight="fill" />
                </ItemIcon>

                <span>O café chega fresquinho até você</span>
              </Item>
            </ItemsContainer>
          </HeroContent>

          <img
            src={HeroImage}
            alt="Image de um copo de café com a logo do coffee delivery rodeado por grãos de café"
          />
        </main>
      </HeroSection>

      <CoffeeSection />
    </HomeContainer>
  )
}
