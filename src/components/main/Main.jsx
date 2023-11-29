import { createContext, useState, useEffect } from 'react';
import { Dropdown, changerLeft, changerRight, exchange } from '../index';
import { switcherUp, switcherDown } from '../index';
import './main.css';

export const MainContext = createContext([]);

export const Main = ({ currData }) => {
  const [isChanged, setIsChanged] = useState(false);
  const [firstCurr, setFirstCurr] = useState('UAH');
  const [secondCurr, setSecondCurr] = useState('USD');
  const [isSwitchTo, setIsSwitchTo] = useState(false);
  const [isSwitchFrom, setIsSwitchFrom] = useState(false);
  const [findCurrName, setFindCurrName] = useState('');
  const [inputValueTo, setInputValueTo] = useState(0.027);
  const [inputValueFrom, setInputValueFrom] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const calculateExchangeRate = () => {
      const firstRate = firstCurr === 'UAH' ? 1 : currData.find((curr) => curr.cc === firstCurr)?.rate;
      const secondRate = currData.find((curr) => curr.cc === secondCurr)?.rate;

      if (firstRate && secondRate) {
        const rate = firstRate / secondRate;
        setExchangeRate(rate);
      }
    };

    calculateExchangeRate();
  }, [currData, firstCurr, secondCurr]);

  const toggleSwitcherTo = (event) => {
    event.preventDefault();
    setIsSwitchTo(!isSwitchTo);
  };

  const toggleSwitcherFrom = (event) => {
    event.preventDefault();
    setIsSwitchFrom(!isSwitchFrom);
  };

  const currencyChooseTo = (event) => {
    event.preventDefault();
    setSecondCurr(event.target.value);
    setIsSwitchTo(!isSwitchTo);
  };

  const currencyChooseFrom = (event) => {
    event.preventDefault();
    setFirstCurr(event.target.value);
    setIsSwitchFrom(!isSwitchFrom);
  };

  const handlerInput = (event) => {
    event.preventDefault();
    setFindCurrName(event.target.value);
  };

  const toggleChanger = (event) => {
    event.preventDefault();
    setFirstCurr(secondCurr);
    setSecondCurr(firstCurr);
    setIsChanged(!isChanged);
  };

  const handlerValueTo = (event) => {
    event.preventDefault();
    setInputValueTo(event.target.value);
    setInputValueFrom(event.target.value / exchangeRate);
  };

  const handlerValueFrom = (event) => {
    event.preventDefault();
    setInputValueFrom(event.target.value);
    setInputValueTo(event.target.value * exchangeRate);
  };

  return (
    <MainContext.Provider value={{ currData, isSwitchTo, isSwitchFrom, findCurrName }}>
      <main className='main container'>
        <img className='main__bg' src={exchange} alt="exchange bg" />
        <p>Конвертуйте валюту згідно стандартам Національного банку України</p>

        <form action="">
          <input
            className='curr__input'
            type="number"
            id="input-amount"
            value={inputValueFrom}
            onChange={handlerValueFrom}
          />
          <div className="custom-dropdown">
            <button className="custom__option" onClick={(e) => toggleSwitcherFrom(e)}>
              <span>{firstCurr}</span>
              {isSwitchFrom ? <img src={switcherUp} alt="switcher" /> : <img src={switcherDown} alt="switcher" />}
            </button>

            <Dropdown
              what='from'
              handlerInput={handlerInput}
              currencyChooseFrom={currencyChooseFrom}
              currencyChooseTo={currencyChooseTo}
            />
          </div>

          <img onClick={(e) => toggleChanger(e)} src={isChanged ? changerRight : changerLeft} alt="changer" />

          <input
            className='curr__input'
            type="number"
            id="input-amount"
            value={inputValueTo}
            onChange={handlerValueTo}
          />
          <div className="custom-dropdown">
            <button className="custom__option" onClick={(e) => toggleSwitcherTo(e)}>
              <span>{secondCurr}</span>
              {isSwitchTo ? <img src={switcherUp} alt="switcher" /> : <img src={switcherDown} alt="switcher" />}
            </button>

            <Dropdown
              what='to'
              handlerInput={handlerInput}
              currencyChooseFrom={currencyChooseFrom}
              currencyChooseTo={currencyChooseTo}
            />
          </div>
        </form>
      </main>
    </MainContext.Provider>
  );
};
