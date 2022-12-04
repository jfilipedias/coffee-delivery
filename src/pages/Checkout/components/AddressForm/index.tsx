import { Input } from '../Input'
import { AddressFormContainer } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input
        id="postalCode"
        className="grid-col-span-3 postal-code"
        type="number"
        placeholder="CEP"
        label="CEP"
        required
      />

      <Input
        id="address"
        className="grid-col-span-3"
        type="text"
        placeholder="Rua"
        label="Rua"
        required
      />

      <Input
        id="number"
        type="number"
        placeholder="Número"
        label="Número"
        required
      />

      <Input
        id="complement"
        className="grid-col-span-2"
        type="text"
        placeholder="Complemento"
        label="Complemento"
      />

      <Input
        id="neighborhood"
        type="text"
        placeholder="Bairro"
        label="Bairro"
        required
      />

      <Input
        id="city"
        type="text"
        placeholder="Cidade"
        label="Cidade"
        required
      />

      <Input id="state" type="text" placeholder="UF" label="UF" required />
    </AddressFormContainer>
  )
}
