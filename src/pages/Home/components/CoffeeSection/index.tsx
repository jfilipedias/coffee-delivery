import { useState } from 'react'

import {
  CoffeeSectionContainer,
  CoffeeSectionHeader,
  CoffeesList,
  FiltersContainer,
} from './styles'
import { CoffeeCard } from '../CoffeeCard'
import { Filter } from '../Filter'
import coffeesList from '../../../../data/coffees.json'
import filtersList from '../../../../data/filters.json'

export function CoffeeSection() {
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
    <CoffeeSectionContainer>
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
          <CoffeeCard key={coffee.id} {...coffee} />
        ))}
      </CoffeesList>
    </CoffeeSectionContainer>
  )
}
