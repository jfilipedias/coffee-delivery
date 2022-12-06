import { ShoppingCart } from 'phosphor-react'

import { Cart } from './styles'
import { useCart } from '../../hooks/useCart'

export function CartLink() {
  const { itemsAmount } = useCart()
  const hasItemOnCart = itemsAmount > 0

  return (
    <Cart>
      {hasItemOnCart && <span>{itemsAmount}</span>}

      <ShoppingCart size={22} weight="fill" />
    </Cart>
  )
}
