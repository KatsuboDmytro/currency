import { logo, usd, eur } from '../index'
import './header.css'

export const Header = () => {
  return (
    <header className='header container'>
      <img src={logo} alt="logo" />
      <ul className='header__currencies'>
        <li><img src={usd} alt="usd icon" /> <span>36.6</span></li>
        <li><img src={eur} alt="eur icon" /> <span>41.2</span></li>
        <li></li>
      </ul>
    </header>
  )
}
