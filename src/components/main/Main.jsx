import { useEffect, useState } from 'react';
import { ChangerLeft, ChangerRight, Exchange } from '../../assets/assets';
import { Select } from '../select/Select';
import './main.css';

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

  const handlerValueTo = (event) => {
    event.preventDefault();
    setInputValueFrom(event.target.value * exchangeRate);
    setInputValueTo(event.target.value );
  };

  const toggleChanger = () => {
    setFirstCurr(secondCurr);
    setSecondCurr(firstCurr);
    setIsChanged(!isChanged);
  };

  useEffect(() => {
    const calculateExchangeRate = () => {
      const firstRate = firstCurr === 'UAH' ? 1 : currData.find((curr) => curr.cc === firstCurr)?.rate;
      const secondRate = secondCurr === 'UAH' ? 36.6/firstRate : currData.find((curr) => curr.cc === secondCurr)?.rate;

      if (firstRate && secondRate) {
        const rate = firstRate / secondRate;
        setExchangeRate(rate);
      }
    };
    calculateExchangeRate();
  }, [currData, firstCurr, secondCurr]);

  return (
    <main className='main container'>
      <Exchange />
      <p>Конвертуйте валюту згідно стандартам Національного банку України</p>

      <form action="">
        <input
          className='curr__input'
          type="number"
          id="input-amount"
          value={inputValueFrom}
          onChange={handlerValueFrom}
        />
        <Select 
          listPosition={'left'}
          currData={currData} 
          value={firstCurr}
          currencyChooseTo={currencyChooseTo}
          currencyChooseFrom={currencyChooseFrom} 
        />

        {isChanged ? <div onClick={toggleChanger}><ChangerRight /></div> : <div onClick={toggleChanger}><ChangerLeft /></div>}

        <input
          className='curr__input'
          type="number"
          id="input-amount"
          value={inputValueTo}
          onChange={handlerValueTo}
        />
        <Select 
          listPosition={'right'}
          currData={currData} 
          value={secondCurr}
          currencyChooseTo={currencyChooseTo}
          currencyChooseFrom={currencyChooseFrom} 
        />
      </form>
    </main>
  );
};
