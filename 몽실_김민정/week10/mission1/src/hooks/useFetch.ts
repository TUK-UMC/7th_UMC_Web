import { useState, useEffect } from "react";

interface useFetchReturnType {
  data: {} | null;
  loading: boolean;
  error: ErrorType | null;
}

interface ErrorType {
  error: {
    message: string;
  };
}

export const useFetch = (
  fetchFunction: () => any,
  dependencies = []
): useFetchReturnType => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchFunction();
        if (isMounted) {
          setData(result);
        }
      } catch (err: any) {
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
