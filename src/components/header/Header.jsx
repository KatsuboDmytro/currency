import { logo, usd, eur } from '../index'
import './header.css'

export const Header = ({ currData }) => {
  return (
    <header className='header container'>
      <img src={logo} alt="logo" />
      <ul className='header__currencies'>
        <li><img src={usd} alt="usd icon" /> <span>{currData[0]?.rate}</span></li>
        <li><img src={eur} alt="eur icon" /> <span>{currData[1]?.rate}</span></li>
        <li></li>
      </ul>
    </header>
  )
}
