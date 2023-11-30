import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchCurrency = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setCurrency(response.data);
        setIsLoading(false);
      } catch (error) {
        alert('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, currency };
};

export default useFetchCurrency;
