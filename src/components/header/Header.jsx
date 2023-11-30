import { Logo, Usd, Eur } from '../../assets/assets'
import './header.css'

export const Header = ({ currData }) => {
  return (
    <header className='header container'>
      <Logo />
      <ul className='header__currencies'>
        <li><Usd /> <span>{currData[0]?.rate}</span></li>
        <li><Eur /> <span>{currData[1]?.rate}</span></li>
        <li></li>
      </ul>
    </header>
  )
}
