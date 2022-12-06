import { Fragment, useContext } from 'react'

import {
  ConfirmButton,
  ConfirmCartFormContainer,
  Divider,
  PriceTotalItem,
  TotalsContainer,
} from './styles'
import { CartItem } from '../CartItem'
import { CartContext } from '../../../../contexts/CartContext'

export function ConfirmCartForm() {
  const { cartItems } = useContext(CartContext)

  const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const itemsPriceAmount = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.amount * currentItem.price,
    0,
  )
  const formattedItemsPriceAmount = priceFormatter.format(itemsPriceAmount)

  const deliveryFee = 5
  const formattedDeliveryFee = priceFormatter.format(deliveryFee)

  const formattedTotalPrice = priceFormatter.format(
    itemsPriceAmount + deliveryFee,
  )

  return (
    <ConfirmCartFormContainer>
      {cartItems.map((item) => (
        <Fragment key={item.id}>
          <CartItem {...item} />
          <Divider />
        </Fragment>
      ))}

      <TotalsContainer>
        <PriceTotalItem>
          <span>Total de itens</span>
          <span>{formattedItemsPriceAmount}</span>
        </PriceTotalItem>

        <PriceTotalItem>
          <span>Entrega</span>
          <span>{formattedDeliveryFee}</span>
        </PriceTotalItem>

        <PriceTotalItem>
          <strong>Total</strong>
          <strong>{formattedTotalPrice}</strong>
        </PriceTotalItem>
      </TotalsContainer>

      <ConfirmButton type="submit">Confirmar pedido</ConfirmButton>
    </ConfirmCartFormContainer>
  )
}
