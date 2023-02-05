import useSWR from 'swr';
import { useState } from 'react';

const BASE_URL = "/api/";

const useApi = (endpoint) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    const { data, error, mutate } = useSWR(BASE_URL + endpoint, async (endpoint) => {
        setIsLoading(true);
        setApiError(null);

        try {
            const response = await fetch(endpoint);
            const json = await response.json();
            return json;
        } catch (error) {
            setApiError(error);
            return error;
        } finally {
            setIsLoading(false);
        }
    });

    const get = () => {
        mutate();
    };

    const create = async (data) => {
        setIsLoading(true);
        setApiError(null);

        try {
            const response = await fetch(BASE_URL + endpoint, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            mutate(prevData => [...prevData, json]);
        } catch (error) {
            setApiError(error);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const update = async (id, data) => {
        setIsLoading(true);
        setApiError(null);

        try {
            const response = await fetch(BASE_URL + endpoint, {
                method: 'PUT',
                body: JSON.stringify({ id, name: data }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            mutate(prevData =>
                prevData.map(item => (item.id === id ? json : item))
            );
        } catch (error) {
            setApiError(error);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const remove = async (id) => {
        setIsLoading(true);
        setApiError(null);

        try {
            await fetch(BASE_URL + endpoint + `?id=${id}`, {
                method: 'DELETE'
            });
            mutate(prevData => prevData.filter(item => item.id !== id));
        } catch (error) {
            setApiError(error);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return { data, error: apiError || error, isLoading, get, create, update, remove };
};

export default useApi;
