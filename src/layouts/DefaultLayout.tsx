import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <h1>Default Layout</h1>
      <Outlet />
    </>
  )
}
