import { useForm } from 'react-hook-form'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { FormContainer } from './styles'
import { AddressForm } from './components/AddressForm'
import { ConfirmCartForm } from './components/ConfirmCartForm'
import { FormStep } from './components/FormStep'
import { PaymentForm } from './components/PaymentForm'
import { StepSection } from './components/StepSection'
import { StepSectionHeader } from './components/StepSectionHeader'

export function Checkout() {
  const { colors } = useTheme()
  const { handleSubmit } = useForm()

  function handleCreateNewOrder() {}

  return (
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

          <PaymentForm />
        </StepSection>
      </FormStep>

      <FormStep title="Cafés selecionados" style={{ width: '28rem' }}>
        <StepSection style={{ borderRadius: '6px 44px' }}>
          <ConfirmCartForm />
        </StepSection>
      </FormStep>
    </FormContainer>
  )
}
