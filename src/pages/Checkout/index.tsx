import { FormProvider, useForm } from 'react-hook-form'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { FormContainer } from './styles'
import { AddressForm } from './components/AddressForm'
import { ConfirmCartForm } from './components/ConfirmCartForm'
import { FormStep } from './components/FormStep'
import { PaymentMethodForm } from './components/PaymentMethodForm'
import { StepSection } from './components/StepSection'
import { StepSectionHeader } from './components/StepSectionHeader'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = z.object({
  postalCode: z.string().min(1, 'Informe o CEP'),
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

export type ConfirmOrderFormData = z.infer<
  typeof confirmOrderFormValidationSchema
>

export function Checkout() {
  const { colors } = useTheme()
  const { clearCart } = useCart()
  const navigate = useNavigate()

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })

  const { handleSubmit } = confirmOrderForm

  function handleCreateNewOrder(data: ConfirmOrderFormData) {
    console.log({ data })

    navigate('/pedido-confirmado')
    clearCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <FormContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
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
