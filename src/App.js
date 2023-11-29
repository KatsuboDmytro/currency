import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, Loader, Main } from './components/index'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        setCurrency(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
    {
      isLoading ?
      <Loader /> :
      <>
        <Header currData={currency.filter((curr) => curr.cc === 'USD' || curr.cc === 'EUR')} />
        <Main currData={currency} />
      </>
    }
    </>
  );
}

export default App;
