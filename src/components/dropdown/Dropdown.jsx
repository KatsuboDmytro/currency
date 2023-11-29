import { useMainContext } from '../../hooks/useMainContext'
import './dropdown.css'

export const Dropdown = ({ what, handlerInput, currencyChooseFrom, currencyChooseTo }) => {
  const { currData, isSwitchTo, isSwitchFrom, findCurrName,  } = useMainContext();
    
  return (
    <div className="dropdown-list" style={{ display: (what === 'to' ? isSwitchTo : isSwitchFrom) ? 'block' : 'none' }}>
      <input type="text" className="search-input" placeholder="Search..." value={findCurrName} onChange={handlerInput} />
      {currData
      .filter((curr) =>
        Object.values(curr).some((value) =>
          value.toString().toLowerCase().includes(findCurrName.toLowerCase())
        )
      )
      .map((money) => {
        return <option key={money.cc} value={money.cc} onClick={what === 'to' ? currencyChooseTo : currencyChooseFrom}>{money.cc}</option>
      })}
    </div>
  )
}
