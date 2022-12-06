import { Trash } from 'phosphor-react'

import {
  ActionsContainer,
  CartItemContainer,
  DetailsContainer,
  InfoContainer,
  RemoveItemButton,
} from './styles'
import { Counter } from '../../../../components/Counter'

interface CartItemProps {
  id: string
  image: string
  title: string
  amount: number
  price: number
}

export function CartItem({ id, image, title, amount, price }: CartItemProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  function handleRemoveItem() {}

  return (
    <CartItemContainer>
      <InfoContainer>
        <img src={image} alt="" />

        <DetailsContainer>
          <span>{title}</span>

          <ActionsContainer>
            <Counter count={amount} onCountChange={() => {}} />

            <RemoveItemButton type="button" onClick={handleRemoveItem}>
              <Trash size={16} /> Remover
            </RemoveItemButton>
          </ActionsContainer>
        </DetailsContainer>
      </InfoContainer>

      <strong>{formattedPrice}</strong>
    </CartItemContainer>
  )
}
