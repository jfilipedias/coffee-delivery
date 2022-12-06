import { Fragment, useContext } from 'react'

import { ConfirmCartFormContainer, Divider } from './styles'
import { Button } from '../Button'
import { CartContext } from '../../../../contexts/CartContext'
import { CartItem } from '../CartItem'

export function ConfirmCartForm() {
  const { cartItems } = useContext(CartContext)

  return (
    <ConfirmCartFormContainer>
      {cartItems.map((item) => (
        <Fragment key={item.id}>
          <CartItem {...item} />
          <Divider />
        </Fragment>
      ))}

      <Button type="submit">Confirmar pedido</Button>
    </ConfirmCartFormContainer>
  )
}
