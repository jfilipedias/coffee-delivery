import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import {
  ActionsContainer,
  CartItemContainer,
  DetailsContainer,
  InfoContainer,
  RemoveItemButton,
} from './styles'
import { CartContext } from '../../../../contexts/CartContext'
import { Counter } from '../../../../components/Counter'
import coffeesList from '../../../../data/coffees.json'

interface CartItemProps {
  id: string
  amount: number
}

export function CartItem({ id, amount }: CartItemProps) {
  const { removeItemFromCart } = useContext(CartContext)

  const { image, title, price } = coffeesList.find(
    (coffee) => coffee.id === id,
  )!

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  function handleRemoveItem() {
    removeItemFromCart(id)
  }

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
