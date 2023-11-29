import { useState } from 'react';
import { Input, changerLeft, changerRight, exchange } from '../index';
import './main.css';

export const Main = () => {
  const [isChanged, setIsSChanged] = useState(false);

  const toggleChanger = (event) => {
    event.preventDefault();
    setIsSChanged(!isChanged);
  };

  return (
    <main className='main container'>
      <img className='main__bg' src={exchange} alt="exchange bg" />
      <p>Конвертуйте валюту згідно стандартам Національного<br /> банку України</p>
      <form action="">
        <Input />
        <img onClick={(e) => toggleChanger(e)} src={isChanged ? changerRight : changerLeft} alt="changer" />
        <Input />
      </form>
    </main>
  );
};
