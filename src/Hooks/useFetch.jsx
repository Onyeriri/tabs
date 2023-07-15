import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error('Something went wrong!!!');
                }
                const data = await response.json();

                setInfo(data);
                setError(false);
            } catch (err) {
                setError(true);
                setIsLoading(false)
            }

            setIsLoading(false);
        };
    
        fetchData();
    }, []);

    return {
        info,
        isLoading,
        error
    };
};

export default useFetch;