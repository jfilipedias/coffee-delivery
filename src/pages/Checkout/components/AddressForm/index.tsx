import { useFormContext } from 'react-hook-form'

import { AddressFormContainer } from './styles'
import { Input } from '../Input'
import { ConfirmOrderFormData } from '../..'

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ConfirmOrderFormData>()

  return (
    <AddressFormContainer>
      <Input
        id="postalCode"
        className="grid-col-span-3 postal-code"
        type="text"
        placeholder="CEP"
        label="CEP"
        error={errors.postalCode?.message}
        required
        {...register('postalCode')}
      />

      <Input
        id="street"
        className="grid-col-span-3"
        type="text"
        placeholder="Rua"
        error={errors.street?.message}
        required
        {...register('street')}
      />

      <Input
        id="number"
        type="number"
        placeholder="Número"
        label="Número"
        error={errors.number?.message}
        required
        {...register('number')}
      />

      <Input
        id="complement"
        className="grid-col-span-2"
        type="text"
        placeholder="Complemento"
        label="Complemento"
        {...register('complement')}
      />

      <Input
        id="district"
        type="text"
        placeholder="Bairro"
        label="Bairro"
        error={errors.district?.message}
        required
        {...register('district')}
      />

      <Input
        id="city"
        type="text"
        placeholder="Cidade"
        label="Cidade"
        error={errors.city?.message}
        required
        {...register('city')}
      />

      <Input
        id="state"
        type="text"
        placeholder="UF"
        label="UF"
        maxLength={2}
        error={errors.state?.message}
        required
        {...register('state')}
      />
    </AddressFormContainer>
  )
}
