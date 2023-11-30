import './dropdown.css'

export const Dropdown = ({ listPosition, what, currData, currencyChooseFrom, findCurrName, handlerInput, currencyChooseTo }) => {
    
  return (
    <div className="dropdown-list" style={{ display: what === 'wrap' ? 'block' : 'none' }}>
      <input type="text" className="search-input" placeholder="Search..." value={findCurrName} onChange={handlerInput} />
      {currData
      .filter((curr) =>
        Object.values(curr).some((value) =>
          value.toString().toLowerCase().includes(findCurrName.toLowerCase())
        )
      )
      .map((money) => {
        return (
          <option
            key={money.cc}
            value={money.cc}
            onClick={listPosition === 'left' ? currencyChooseFrom : currencyChooseTo}
          >
            {money.cc}
          </option>
        );
      })}
    </div>
  )
}
