import { useState, useEffect } from "react";

export const useCustomFetch = (apiCall, deps = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
        const response = await apiCall();
        setData(response.data);
        } catch (err) {
        setError(err);
        } finally {
        setLoading(false);
        }
    };
    fetchData();
    }, deps);

    return { data, loading, error };
};
