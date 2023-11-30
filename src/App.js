import { useMemo } from 'react';
import { Header, Loader, Main } from './components/index'
import useFetchCurrency from './api/useFetchCurrency';
import { getBankURL } from './api/constants'

function App() {
  const {isLoading, currency} = useFetchCurrency({url: getBankURL});

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
