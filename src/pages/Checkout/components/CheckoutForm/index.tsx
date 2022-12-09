import { FormProvider, useForm } from 'react-hook-form'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { FormContainer } from './styles'
import { AddressForm } from '../AddressForm'
import { ConfirmCartForm } from '../ConfirmCartForm'
import { FormStep } from '../FormStep'
import { PaymentMethodForm } from '../PaymentMethodForm'
import { StepSection } from '../StepSection'
import { StepSectionHeader } from '../StepSectionHeader'
import { useCart } from '../../../../hooks/useCart'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const checkoutFormValidationSchema = z.object({
  zipCode: z
    .string()
    .min(1, 'Informe o CEP')
    .regex(/^(\d{5})-(\d{3})$/, 'Informe um CEP válido'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  complement: z.string(),
  district: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF').max(2),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type CheckoutFormData = z.infer<typeof checkoutFormValidationSchema>

interface CheckoutFormProps {
  onCheckout: () => void
}

export function CheckoutForm({ onCheckout }: CheckoutFormProps) {
  const { colors } = useTheme()
  const { clearCart } = useCart()

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })

  const { handleSubmit } = checkoutForm

  function handleCheckout(data: CheckoutFormData) {
    console.log({ data })

    onCheckout()
    clearCart()
  }

  return (
    <FormProvider {...checkoutForm}>
      <FormContainer onSubmit={handleSubmit(handleCheckout)}>
        <FormStep title="Complete seu pedido" style={{ width: '40rem' }}>
          <StepSection>
            <StepSectionHeader
              icon={<MapPinLine size={22} color={colors['yellow-500']} />}
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
            />

            <AddressForm />
          </StepSection>

          <StepSection>
            <StepSectionHeader
              icon={<CurrencyDollar size={22} color={colors['purple-500']} />}
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <PaymentMethodForm />
          </StepSection>
        </FormStep>

        <FormStep title="Cafés selecionados" style={{ width: '28rem' }}>
          <StepSection style={{ borderRadius: '6px 44px' }}>
            <ConfirmCartForm />
          </StepSection>
        </FormStep>
      </FormContainer>
    </FormProvider>
  )
}
