import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { useOrder } from '../../../../hooks/useOrder'

import {
  ConfirmedOrderContainer,
  Item,
  ItemIcon,
  ItemsContainer,
  ItemText,
} from './styles'

const paymentMethods = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  money: 'Dinheiro',
}

export function ConfirmedOrder() {
  const { lastOrder } = useOrder()

  return (
    <ConfirmedOrderContainer>
      <section>
        <h2>Uhu! Pedido confirmado</h2>

        <span>Agora é só aguardar que logo o café chegará até você</span>

        <ItemsContainer>
          <Item>
            <ItemIcon>
              <MapPin weight="fill" />
            </ItemIcon>

            <ItemText>
              <span>
                Entrega em{' '}
                <strong>
                  {lastOrder?.street}, {lastOrder?.number}
                </strong>
              </span>

              <span>
                {lastOrder?.city} - {lastOrder?.state}
              </span>
            </ItemText>
          </Item>

          <Item>
            <ItemIcon>
              <Timer weight="fill" />
            </ItemIcon>

            <ItemText>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </ItemText>
          </Item>

          <Item>
            <ItemIcon>
              <CurrencyDollar />
            </ItemIcon>

            <ItemText>
              <span>Pagamento na entrega</span>
              <strong>{paymentMethods[lastOrder?.paymentMethod!]}</strong>
            </ItemText>
          </Item>
        </ItemsContainer>
      </section>

      <img src="/motoboy.svg" alt="" />
    </ConfirmedOrderContainer>
  )
}
