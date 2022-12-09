import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  ConfirmedOrderContainer,
  Item,
  ItemIcon,
  ItemsContainer,
  ItemText,
} from './styles'

export function ConfirmedOrder() {
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
                Entrega em <strong>{}</strong>
              </span>
              <span>{}</span>
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
              <strong>{}</strong>
            </ItemText>
          </Item>
        </ItemsContainer>
      </section>

      <img src="/motoboy.svg" alt="" />
    </ConfirmedOrderContainer>
  )
}
