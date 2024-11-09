import { useState, useEffect } from 'react';
import axios from 'axios';

const useCustomFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(url, {
          params: {
            api_key: process.env.REACT_APP_MOVIE_API_KEY, // API Key를 포함해서 요청
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useCustomFetch;
