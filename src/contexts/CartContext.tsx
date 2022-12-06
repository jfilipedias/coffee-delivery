import { createContext, ReactNode } from 'react'

import { usePersistedState } from '../hooks/usePersistedState'

interface CartItem {
  id: string
  image: string
  title: string
  amount: number
  price: number
}

interface CartContextData {
  cartItems: CartItem[]
  itemsAmount: number
  addItemToCart: (itemToAdd: CartItem) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = usePersistedState<CartItem[]>(
    '@coffee-delivery:cart-state-1.1.1',
    [],
  )

  const itemsAmount = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.amount,
    0,
  )

  function addItemToCart(itemToAdd: CartItem) {
    const itemAlreadyExists = cartItems.find((item) => item.id === itemToAdd.id)

    if (itemAlreadyExists) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === itemToAdd.id) {
          const incrementedItemAmount = item.amount + itemToAdd.amount
          return { ...item, amount: incrementedItemAmount }
        }

        return item
      })

      setCartItems(updatedCartItems)
    } else {
      setCartItems((state) => [...state, itemToAdd])
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, itemsAmount, addItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}
