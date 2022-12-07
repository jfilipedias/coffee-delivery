import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { ButtonsContainer, PaymentFormContainer } from './styles'
import { ErrorMessage } from '../ErrorMessage'
import { PaymentMethodButton } from '../PaymentMethodButton'
import { ConfirmOrderFormData } from '../..'

export function PaymentMethodForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ConfirmOrderFormData>()

  return (
    <PaymentFormContainer>
      <ButtonsContainer>
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
      </ButtonsContainer>

      {errors.paymentMethod && (
        <ErrorMessage>{errors.paymentMethod?.message}s</ErrorMessage>
      )}
    </PaymentFormContainer>
  )
}
