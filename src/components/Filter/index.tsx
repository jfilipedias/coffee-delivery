import { useState } from 'react'

import { FilterContainer } from './styles'

interface FilterProps {
  name: string
  onAddFilter: (filterToAdd: string) => void
  onRemoveFilter: (filterToRemove: string) => void
}

export function Filter({ name, onAddFilter, onRemoveFilter }: FilterProps) {
  const [isActive, setIsActive] = useState(false)

  function handleClick() {
    if (isActive) {
      onRemoveFilter(name)
    } else {
      onAddFilter(name)
    }

    setIsActive((state) => !state)
  }

  return (
    <FilterContainer type="button" onClick={handleClick} isActive={isActive}>
      {name}
    </FilterContainer>
  )
}
