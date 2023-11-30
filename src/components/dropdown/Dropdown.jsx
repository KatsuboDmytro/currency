import './dropdown.css';

export const Dropdown = ({ listPosition, isOpen, currData, currencyChooseFrom, findCurrName, handlerInput, currencyChooseTo, toggleSwitchStatus }) => {

  const handleClick = (e) => {
    e.preventDefault();
    if (listPosition === 'left') {
      currencyChooseFrom(e);
    } else {
      currencyChooseTo(e);
    }
    toggleSwitchStatus(e);
  };

  return (
    <div className="dropdown-list" style={{ display: isOpen === 'wrap' ? 'block' : 'none' }}>
      <input type="text" className="search-input" placeholder="Search..." value={findCurrName} onChange={e => handlerInput(e)} />
      {currData
        .filter((curr) =>
          Object.values(curr).some((value) =>
            value.toString().toLowerCase().includes(findCurrName.toLowerCase())
          )
        )
        .map((money) => (
          <option key={money.cc} value={money.cc} onClick={e => handleClick(e)}>
            {money.cc}
          </option>
        ))}
    </div>
  );
};
