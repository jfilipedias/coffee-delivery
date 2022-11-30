import { createContext, ReactNode } from 'react'

interface CartContextData {
  itemsAmount: number
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  return (
    <CartContext.Provider value={{ itemsAmount: 0 }}>
      {children}
    </CartContext.Provider>
  )
}
