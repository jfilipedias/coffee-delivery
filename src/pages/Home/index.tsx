import { useState } from 'react'
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
  CoffeeSection,
  CoffeeSectionHeader,
  CoffeesList,
  FiltersContainer,
} from './styles'
import HeroImage from '../../assets/hero.png'
import { CoffeeCard } from '../../components/CoffeeCard'
import coffeesList from '../../data/coffees.json'
import filtersList from '../../data/filters.json'
import { Filter } from '../../components/Filter'

export function Home() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const coffeesToList =
    selectedFilters.length === 0 ? coffeesList : filterCoffees()

  function handleAddFilter(filterToAdd: string) {
    setSelectedFilters((state) => [...state, filterToAdd])
  }

  function handleRemoveFilter(filterToRemove: string) {
    const selectedFiltersWithoutRemovedOne = selectedFilters.filter(
      (filter) => filter !== filterToRemove,
    )

    setSelectedFilters([...selectedFiltersWithoutRemovedOne])
  }

  function filterCoffees() {
    return coffeesList.filter((coffee) =>
      selectedFilters.every((selectedFilter) =>
        coffee.tags.includes(selectedFilter),
      ),
    )
  }

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

      <CoffeeSection>
        <CoffeeSectionHeader>
          <h2>Nossos Café</h2>

          <FiltersContainer>
            {filtersList.map((filter) => (
              <li key={filter}>
                <Filter
                  name={filter}
                  onAddFilter={handleAddFilter}
                  onRemoveFilter={handleRemoveFilter}
                />
              </li>
            ))}
          </FiltersContainer>
        </CoffeeSectionHeader>

        <CoffeesList>
          {coffeesToList.map((coffee) => (
            <CoffeeCard key={coffee.title} {...coffee} />
          ))}
        </CoffeesList>
      </CoffeeSection>
    </HomeContainer>
  )
}
