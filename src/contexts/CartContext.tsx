import { createContext, ReactNode } from 'react'

import { usePersistedState } from '../hooks/usePersistedState'

interface CartItem {
  id: string
  amount: number
}

interface CartContextData {
  cartItems: CartItem[]
  deliveryFee: number
  itemsAmount: number
  addItemToCart: (itemToAdd: CartItem) => void
  removeItemFromCart: (id: string) => void
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

  const deliveryFee = 5

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

  function removeItemFromCart(id: string) {
    const filteredCartItems = cartItems.filter((item) => item.id !== id)
    setCartItems(filteredCartItems)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemsAmount,
        deliveryFee,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
