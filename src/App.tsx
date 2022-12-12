import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CartContextProvider } from './contexts/CartContext'
import { OrderContextProvider } from './contexts/OrderContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <OrderContextProvider>
          <HashRouter>
            <Router />
          </HashRouter>
        </OrderContextProvider>
      </CartContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
