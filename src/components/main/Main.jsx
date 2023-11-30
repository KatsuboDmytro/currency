import { createContext, useEffect, useState } from 'react';
import { changerLeft, changerRight, exchange } from '../index';
import { Select } from '../select/Select';
import './main.css';

export const MainContext = createContext([]);

export const Main = ({ currData }) => {
  const [isChanged, setIsChanged] = useState(false);
  const [firstCurr, setFirstCurr] = useState('UAH');
  const [secondCurr, setSecondCurr] = useState('USD');
  const [inputValueTo, setInputValueTo] = useState(0.027);
  const [inputValueFrom, setInputValueFrom] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(1);

  const currencyChooseTo = (event) => {
    event.preventDefault();
    setSecondCurr(event.target.value);
  };

  const currencyChooseFrom = (event) => {
    event.preventDefault();
    setFirstCurr(event.target.value);
  };
  
  const handlerValueFrom = (event) => {
    event.preventDefault();
    setInputValueFrom(event.target.value);
    setInputValueTo(event.target.value * exchangeRate);
  };

  const toggleChanger = () => {
    setFirstCurr(secondCurr);
    setSecondCurr(firstCurr);
    setIsChanged(!isChanged);
  };

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

  return (
    <main className='main container'>
      <img className='main__bg' src={exchange} alt="exchange bg" />
      <p>Конвертуйте валюту згідно стандартам Національного банку України</p>

      <form action="">
        <Select 
          listPosition={'left'}
          currData={currData} 
          value={firstCurr}
          rate={inputValueFrom}
          handlerValueFrom={handlerValueFrom}
          options={[]} 
          currencyChooseTo={currencyChooseTo}
          currencyChooseFrom={currencyChooseFrom} 
        />

        <img onClick={toggleChanger} src={isChanged ? changerRight : changerLeft} alt="changer" />

        <Select 
          listPosition={'right'}
          currData={currData} 
          value={secondCurr}
          rate={inputValueTo}
          handlerValueFrom={handlerValueFrom}
          options={[]} 
          currencyChooseTo={currencyChooseTo}
          currencyChooseFrom={currencyChooseFrom} 
        />
      </form>
    </main>
  );
};
