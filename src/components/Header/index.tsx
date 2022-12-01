import { Link } from 'react-router-dom'
import { MapPin } from 'phosphor-react'

import { HeaderContainer, Location } from './styles'
import { CartLink } from '../CartLink'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <nav>
        <Location>
          <MapPin size={22} weight="fill" />

          <span>Fortaleza, CE</span>
        </Location>

        <Link to="/pagamento">
          <CartLink />
        </Link>
      </nav>
    </HeaderContainer>
  )
}
