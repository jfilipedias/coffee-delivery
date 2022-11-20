import { Cart, HeaderContainer, Location } from './styles'
import Logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <nav>
        <Location>
          <MapPin size={22} weight="fill" />

          <span>Fortaleza, CE</span>
        </Location>

        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </nav>
    </HeaderContainer>
  )
}
