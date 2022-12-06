import { Trash } from 'phosphor-react'

import {
  ActionsContainer,
  CartItemContainer,
  DetailsContainer,
  InfoContainer,
  RemoveItemButton,
} from './styles'
import { Counter } from '../../../../components/Counter'
import coffeesList from '../../../../data/coffees.json'
import { useCart } from '../../../../hooks/useCart'

interface CartItemProps {
  id: string
  amount: number
}

export function CartItem({ id, amount }: CartItemProps) {
  const { removeItemFromCart, updateCartItem } = useCart()

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

  function handleUpdateItem(amount: number) {
    updateCartItem(id, amount)
  }

  return (
    <CartItemContainer>
      <InfoContainer>
        <img src={image} alt="" />

        <DetailsContainer>
          <span>{title}</span>

          <ActionsContainer>
            <Counter
              count={amount}
              onCountChange={handleUpdateItem}
              minAmount={1}
            />

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
