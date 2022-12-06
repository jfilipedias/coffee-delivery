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
  clearCart: () => void
  removeItemFromCart: (id: string) => void
  updateCartItem: (id: string, amount: number) => void
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

  function clearCart() {
    setCartItems([])
  }

  function removeItemFromCart(id: string) {
    const filteredCartItems = cartItems.filter((item) => item.id !== id)
    setCartItems(filteredCartItems)
  }

  function updateCartItem(id: string, amount: number) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, amount }
      }

      return item
    })

    setCartItems(updatedCartItems)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemsAmount,
        deliveryFee,
        addItemToCart,
        clearCart,
        removeItemFromCart,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
