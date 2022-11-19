import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="pagamento" element={<Checkout />} />
        <Route path="sucesso" element={<Success />} />
      </Route>
    </Routes>
  )
}
