import { Header, Loader, Main } from './components/index'
import useFetchData from './api/useFetchData';
import { useMemo } from 'react';

function App() {
  const {isLoading, currency} = useFetchData(false);

  const currData = useMemo(() => 
    currency.filter((curr) => curr.cc === 'USD' || curr.cc === 'EUR')
  , [currency]);

  return (
    <>
    {
      isLoading ?
      <Loader /> :
      <>
        <Header currData={currData} />
        <Main currData={currency} />
      </>
    }
    </>
  );
}

export default App;
