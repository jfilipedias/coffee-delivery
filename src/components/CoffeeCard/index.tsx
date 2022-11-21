import { ShoppingCart } from 'phosphor-react'
import { CardContainer, PriceContainer, TagContainer, TagsList } from './styles'

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
          <span>R$</span>
          <strong>{price}</strong>
        </PriceContainer>

        <input type="number" />

        <button type="submit">
          <ShoppingCart />
        </button>
      </form>
    </CardContainer>
  )
}
