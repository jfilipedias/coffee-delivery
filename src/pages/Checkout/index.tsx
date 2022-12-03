import { useForm } from 'react-hook-form'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import {
  ConfirmStepSection,
  FormContainer,
  FormStep,
  SectionHeader,
  StepSection,
} from './styles'

export function Checkout() {
  const { handleSubmit } = useForm()

  function handleCreateNewOrder() {}

  return (
    <FormContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      <FormStep>
        <h2>Complete seu pedido</h2>

        <StepSection>
          <SectionHeader>
            <MapPinLine size={22} />

            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </SectionHeader>
        </StepSection>

        <StepSection>
          <SectionHeader>
            <CurrencyDollar size={22} />

            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </SectionHeader>
        </StepSection>
      </FormStep>

      <FormStep>
        <h2>Cafés selecionados</h2>

        <ConfirmStepSection>
          <button type="submit">Confirmar pedido</button>
        </ConfirmStepSection>
      </FormStep>
    </FormContainer>
  )
}
