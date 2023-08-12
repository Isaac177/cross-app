import {useEffect, useState} from "react";
import axios from "axios";


export const useFetch =  (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query },
        headers: {
            'X-RapidAPI-Key': '1951f90a2emshb577e30e44c63e6p131f34jsn496199efafac',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('Something went wrong. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData().then(r => r);
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData().then(r => r);
    }

    return { data, isLoading, error, refetch };
};

