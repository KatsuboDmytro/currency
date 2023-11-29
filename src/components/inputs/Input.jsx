import { useState } from 'react'
import { switcherUp, switcherDown } from '../index';
import './input.css'

export const Input = () => {
  const [isSwitch, setIsSwitch] = useState(false);

  const toggleSwitcher = (event) => {
    event.preventDefault();
    setIsSwitch(!isSwitch);
  };
  
  return (
    <section className='curr'>
      <input className='curr__input' type="number" id="input-amount" />
      <div className="custom-dropdown">
        <button className="custom__option" onClick={(e) => toggleSwitcher(e)}>
          <span>UAH</span> {isSwitch ? <img src={switcherUp} alt="switcher" /> : <img src={switcherDown} alt="switcher" />}
        </button>
        <div className="dropdown-list" style={{ display: isSwitch ? 'block' : 'none' }}>
          <input type="text" className="search-input" placeholder="Search..." />
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
        </div>
      </div>
    </section>
  )
}
