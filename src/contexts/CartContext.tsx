import { createContext, ReactNode } from 'react'

import { usePersistedState } from '../hooks/usePersistedState'

interface CartItem {
  id: string
  amount: number
}

interface CartContextData {
  cartItems: CartItem[]
  itemsAmount: number
  addItemToCart: (id: string, amount: number) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = usePersistedState<CartItem[]>(
    '@coffee-delivery:cart-state-1.0.0',
    [],
  )

  const itemsAmount = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.amount,
    0,
  )

  function addItemToCart(id: string, amount: number) {
    const itemAlreadyExists = cartItems.find((item) => item.id === id)

    if (itemAlreadyExists) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === id) {
          const incrementedItemAmount = item.amount + amount
          return { ...item, amount: incrementedItemAmount }
        }

        return item
      })

      setCartItems(updatedCartItems)
    } else {
      const itemToAdd = { id, amount }
      setCartItems((state) => [...state, itemToAdd])
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, itemsAmount, addItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}
