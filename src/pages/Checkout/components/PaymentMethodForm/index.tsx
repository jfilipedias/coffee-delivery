import { useFormContext } from 'react-hook-form'
import { PaymentMethodButton } from '../PaymentMethodButton'
import { Bank, CreditCard, Money } from 'phosphor-react'

export function PaymentMethodForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ConfirmOrderFormData>()

  return (
    <PaymentFormContainer>
        <PaymentMethodButton
          id="credit"
          icon={<CreditCard size={16} />}
          label="Cartão de Crédito"
          {...register('paymentMethod')}
        />
        <PaymentMethodButton
          id="debit"
          icon={<Bank size={16} />}
          label="Cartão de Débito"
          {...register('paymentMethod')}
        />
        <PaymentMethodButton
          id="money"
          icon={<Money size={16} />}
          label="Dinheiro"
          {...register('paymentMethod')}
        />
    </PaymentFormContainer>
  )
}
