import { createContext, ReactNode } from 'react'

import { usePersistedState } from '../hooks/usePersistedState'

interface Coffee {
  id: string
  amount: number
}

interface Order {
  street: string
  number: number
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'money'
  itemsPriceAmount: number
  deliveryFee: number
  items: Coffee[]
}

interface OrderContextData {
  orders: Order[]
  lastOrder?: Order
  saveOrder: (order: Order) => void
}

export const OrderContext = createContext({} as OrderContextData)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orders, setOrders] = usePersistedState<Order[]>(
    '@coffee-delivery:orders-state-1.0.0',
    [],
  )

  const lastOrder = orders.at(-1)

  function saveOrder(order: Order) {
    console.log('Saving orders')
    console.log(order)

    setOrders((state) => [...state, order])
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        lastOrder,
        saveOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
