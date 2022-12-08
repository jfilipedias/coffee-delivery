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
        {...register('postalCode')}
      />

      <Input
        id="street"
        className="grid-col-span-3"
        type="text"
        placeholder="Rua"
        error={errors.street?.message}
        {...register('street')}
      />

      <Input
        id="number"
        type="number"
        placeholder="Número"
        label="Número"
        error={errors.number?.message}
        {...register('number')}
      />

      <Input
        id="complement"
        className="grid-col-span-2"
        type="text"
        placeholder="Complemento"
        label="Complemento"
        isOptional
        {...register('complement')}
      />

      <Input
        id="district"
        type="text"
        placeholder="Bairro"
        label="Bairro"
        error={errors.district?.message}
        {...register('district')}
      />

      <Input
        id="city"
        type="text"
        placeholder="Cidade"
        label="Cidade"
        error={errors.city?.message}
        {...register('city')}
      />

      <Input
        id="state"
        type="text"
        placeholder="UF"
        label="UF"
        maxLength={2}
        error={errors.state?.message}
        {...register('state')}
      />
    </AddressFormContainer>
  )
}
