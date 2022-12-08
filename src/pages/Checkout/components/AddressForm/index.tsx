import { useFormContext } from 'react-hook-form'

import { AddressFormContainer } from './styles'
import { Input } from '../Input'
import { ConfirmOrderFormData } from '../..'

function normalizePostalCode(value: string) {
  const matchFiveDigitsRegex = /^(\d{0,5})$/

  if (matchFiveDigitsRegex.test(value)) return value.replace(/\D/g, '')

  return value.replace(/\D/g, '').replace(/^(\d{5})(\d{0,3})$/, '$1-$2')
}

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
        maxLength={9}
        error={errors.postalCode?.message}
        {...register('postalCode')}
        onChange={(event) => {
          event.target.value = normalizePostalCode(event.target.value)
        }}
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
