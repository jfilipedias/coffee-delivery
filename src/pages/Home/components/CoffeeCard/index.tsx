import { FormEvent, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import {
  ActionsContainer,
  CardContainer,
  PriceContainer,
  TagContainer,
  TagsList,
} from './styles'
import { Counter } from '../../../../components/Counter'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCardProps {
  id: string
  image: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function CoffeeCard({
  id,
  image,
  tags,
  title,
  description,
  price,
}: CoffeeCardProps) {
  const [amount, setAmount] = useState(0)

  const { addItemToCart } = useCart()

  const formattedPriceParts = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).formatToParts(price)

  const formattedCurrency = formattedPriceParts
    .filter((part) => part.type === 'currency')
    .map((parts) => parts.value)

  const formattedPrice = formattedPriceParts
    .filter((part) => part.type !== 'currency')
    .map((parts) => parts.value)

  function handleCountChange(value: number) {
    setAmount(value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addItemToCart({ id, amount })
    setAmount(0)
  }

  return (
    <CardContainer>
      <img src={image} alt="" />

      <TagsList>
        {tags.map((tag) => (
          <TagContainer key={tag}>{tag}</TagContainer>
        ))}
      </TagsList>

      <h3>{title}</h3>

      <p>{description}</p>

      <form onSubmit={handleSubmit}>
        <PriceContainer>
          <span>{formattedCurrency}</span>
          <strong>{formattedPrice}</strong>
        </PriceContainer>

        <ActionsContainer>
          <Counter count={amount} onCountChange={handleCountChange} />

          <button type="submit">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </ActionsContainer>
      </form>
    </CardContainer>
  )
}
