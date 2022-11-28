import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Counter } from '../Counter'
import {
  ActionsContainer,
  CardContainer,
  PriceContainer,
  TagContainer,
  TagsList,
} from './styles'

interface CoffeeCardProps {
  img: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function CoffeeCard({
  img,
  tags,
  title,
  description,
  price,
}: CoffeeCardProps) {
  const [count, setCount] = useState(0)

  const formattedPriceToBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).formatToParts(price)

  const priceCurrency = formattedPriceToBRL
    .filter((part) => part.type === 'currency')
    .map((parts) => parts.value)

  const priceValue = formattedPriceToBRL
    .filter((part) => part.type !== 'currency')
    .map((parts) => parts.value)

  function handleCountChange(value: number) {
    setCount(value)
  }

  return (
    <CardContainer>
      <img src={img} alt="" />

      <TagsList>
        {tags.map((tag) => (
          <TagContainer key={tag}>{tag}</TagContainer>
        ))}
      </TagsList>

      <h3>{title}</h3>

      <p>{description}</p>

      <form>
        <PriceContainer>
          <span>{priceCurrency}</span>
          <strong>{priceValue}</strong>
        </PriceContainer>

        <ActionsContainer>
          <Counter count={count} onCountChange={handleCountChange} />

          <button type="submit">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </ActionsContainer>
      </form>
    </CardContainer>
  )
}
