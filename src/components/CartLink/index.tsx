import { useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { Cart } from './styles'
import { CartContext } from '../../contexts/CartContext'

export function CartLink() {
  const { itemsAmount } = useContext(CartContext)
  const hasItemOnCart = itemsAmount > 0

  return (
    <Cart>
      {hasItemOnCart && <span>{itemsAmount}</span>}

      <ShoppingCart size={22} weight="fill" />
    </Cart>
  )
}
