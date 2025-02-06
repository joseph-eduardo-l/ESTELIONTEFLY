// hooks/useFetch.ts
import { useEffect, useState } from 'react';

export const useFetch = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data: T) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [url]);

    return { loading, error, data };
};

export default useFetch;