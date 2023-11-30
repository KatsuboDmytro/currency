import React, { useState } from 'react'
import { Dropdown } from '../dropdown/Dropdown';
import { switcherDown, switcherUp } from '../index';

export const Select = ({ listPosition, currData, value, rate, handlerValueFrom, currencyChooseTo, currencyChooseFrom }) => {
  const [findCurrName, setFindCurrName] = useState('');
  const [switchStatus, setSwitchStatus] = useState('wrap');

  const toggleSwitchStatus = (e) => {
    e.preventDefault();
    setSwitchStatus(switchStatus === 'wrap' ? 'unwrap' : 'wrap');
  };

  const handlerInput = (event) => {
    event.preventDefault();
    setFindCurrName(event.target.value);
  };

  return (
    <>
      <input
        className='curr__input'
        type="number"
        id="input-amount"
        value={rate}
        onChange={handlerValueFrom}
      />
      <div className="custom-dropdown">
        <button className="custom__option" onClick={(e) => toggleSwitchStatus(e, 'unwrap')}>
          <span>{value}</span>
          <img src={switchStatus === 'wrap' ? switcherUp : switcherDown} alt="switcher" />
        </button>

        <Dropdown
          listPosition={listPosition}
          what={switchStatus === 'unwrap' ? 'wrap' : 'unwrap'}
          currData={currData}
          handlerInput={handlerInput}
          findCurrName={findCurrName}
          toggleSwitchStatus={toggleSwitchStatus}
          currencyChooseFrom={currencyChooseFrom}
          currencyChooseTo={currencyChooseTo}
        />
      </div>
    </>
  )
}
