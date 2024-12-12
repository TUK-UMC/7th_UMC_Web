import { useState, useCallback, useEffect } from "react";

export const useFetch = (func, shouldFetchInitially = true) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const mutate = useCallback(
    async (...rest) => {
      setLoading(true);
      try {
        const result = await func(...rest);
        setData(result);
        setLoading(false);
        return { result, loading, error, mutate };
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    },
    [func]
  );

  useEffect(() => {
    if (shouldFetchInitially && !isInitialized) {
      mutate();
      setIsInitialized(true);
    }
  }, [mutate, shouldFetchInitially, isInitialized]);

  return { data, loading, error, mutate };
};
