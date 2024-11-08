import { useState, useEffect } from "react";

export const useFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // 컴포넌트 언마운트 방지

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchFunction();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return { data, loading, error };
};
