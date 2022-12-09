import { useState } from 'react'

import { CheckoutForm } from './components/CheckoutForm'
import { ConfirmedOrder } from './components/ConfirmedOrder'

import { CheckoutContainer } from './styles'

export function Checkout() {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)

  function updateCheckoutPage() {
    setIsOrderConfirmed(true)
  }

  return (
    <CheckoutContainer>
      {isOrderConfirmed ? (
        <ConfirmedOrder />
      ) : (
        <CheckoutForm onCheckout={updateCheckoutPage} />
      )}
    </CheckoutContainer>
  )
}
