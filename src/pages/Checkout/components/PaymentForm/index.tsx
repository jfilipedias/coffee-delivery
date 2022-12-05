import { PaymentFormContainer } from './styles'
import { PaymentMethodButton } from '../PaymentMethodButton'
import { Bank, CreditCard, Money } from 'phosphor-react'

export function PaymentForm() {
  return (
    <PaymentFormContainer>
      <PaymentMethodButton
        id="credit"
        icon={<CreditCard size={16} />}
        label="Cartão de Crédito"
      />
      <PaymentMethodButton
        id="debit"
        icon={<Bank size={16} />}
        label="Cartão de Débito"
      />
      <PaymentMethodButton
        id="money"
        icon={<Money size={16} />}
        label="Dinheiro"
      />
    </PaymentFormContainer>
  )
}
