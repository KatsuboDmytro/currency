import React, { useState } from 'react'
import { SwitcherDown, SwitcherUp } from '../../assets/assets';
import { Dropdown } from '../index';

export const Select = ({ listPosition, currData, value, currencyChooseTo, currencyChooseFrom }) => {
  const [findCurrName, setFindCurrName] = useState('');
  const [switchStatus, setSwitchStatus] = useState('wrap');

  const toggleSwitchStatus = (e) => {
    e.preventDefault();
    setSwitchStatus((prevStatus) => (prevStatus === 'wrap' ? 'unwrap' : 'wrap'));
  };

  const handlerInput = (event) => {
    event.preventDefault();
    setFindCurrName(event.target.value);
  };

  return (
    <>
      <div className="custom-dropdown">
        <button type="button" className="custom__option" onClick={toggleSwitchStatus}>
          <span>{value}</span>
          {switchStatus === 'wrap' ? <SwitcherUp /> : <SwitcherDown />}
        </button>

        <Dropdown
          listPosition={listPosition}
          isOpen={switchStatus === 'unwrap' ? 'wrap' : 'unwrap'}
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
