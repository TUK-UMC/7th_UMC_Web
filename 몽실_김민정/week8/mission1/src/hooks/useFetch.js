import { useState, useCallback, useEffect } from "react";

export const useFetch = (func) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const mutate = useCallback(
    async (payload = null) => {
      setLoading(true);
      try {
        const result = await func(payload);
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
    mutate();
    console.log(data);
  }, [mutate]);

  return { data, loading, error, mutate };
};
