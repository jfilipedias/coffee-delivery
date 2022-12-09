import { ChangeEvent } from 'react'
import { useFormContext } from 'react-hook-form'

import { AddressFormContainer } from './styles'
import { Input } from '../Input'
import { CheckoutFormData } from '../CheckoutForm'

function formatNumericZipCode(zipCode: string) {
  return zipCode.replace(/\D/g, '')
}

function maskZipCode(zipCode: string) {
  const hasMaxFiveDigitsRegex = /^(\d{0,5})$/
  const numericZipCode = formatNumericZipCode(zipCode)

  if (hasMaxFiveDigitsRegex.test(numericZipCode)) {
    return numericZipCode
  }

  return numericZipCode.replace(/^(\d{5})(\d{0,3})$/, '$1-$2')
}

export function AddressForm() {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<CheckoutFormData>()

  function fillAddressForm(zipCode: string) {
    fetch(`http://viacep.com.br/ws/${zipCode}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setValue('street', data?.logradouro)
        setValue('district', data?.bairro)
        setValue('city', data?.localidade)
        setValue('state', data?.uf)
      })
  }

  function handleZipCodeChange(event: ChangeEvent<HTMLInputElement>) {
    const zipCode = event.target.value

    const maskedZipCode = maskZipCode(zipCode)
    event.target.value = maskedZipCode

    const numericZipCode = formatNumericZipCode(zipCode)
    if (numericZipCode.length === 8) {
      fillAddressForm(zipCode)
    }
  }

  return (
    <AddressFormContainer>
      <Input
        id="zipCode"
        className="grid-col-span-3 zip-code"
        type="text"
        placeholder="CEP"
        label="CEP"
        maxLength={9}
        error={errors.zipCode?.message}
        {...register('zipCode')}
        onChange={handleZipCodeChange}
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
