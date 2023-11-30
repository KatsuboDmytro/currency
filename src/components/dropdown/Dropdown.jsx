import './dropdown.css';

export const Dropdown = ({ listPosition, isOpen, currData, currencyChooseFrom, findCurrName, handlerInput, currencyChooseTo, toggleSwitchStatus }) => {

  const handleClick = () => {
    if (listPosition === 'left') {
      currencyChooseFrom();
    } else {
      currencyChooseTo();
    }
    toggleSwitchStatus('wrap');
  };

  return (
    <div className="dropdown-list" style={{ display: isOpen === 'wrap' ? 'block' : 'none' }}>
      <input type="text" className="search-input" placeholder="Search..." value={findCurrName} onChange={handlerInput} />
      {currData
        .filter((curr) =>
          Object.values(curr).some((value) =>
            value.toString().toLowerCase().includes(findCurrName.toLowerCase())
          )
        )
        .map((money) => (
          <option key={money.cc} value={money.cc} onClick={handleClick}>
            {money.cc}
          </option>
        ))}
    </div>
  );
};
