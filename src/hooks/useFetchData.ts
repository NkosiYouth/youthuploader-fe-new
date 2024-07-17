import { useState, useEffect, useCallback } from 'react';
import { fetchData, postData, updateData, deleteData } from '../api/apiClient';

type FetchError = Error | string;

const useFetchData = <T>(endpoint: string, callByDefault: boolean = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<FetchError | null>(null);

  const fetchDataFromApi = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetchData<T>(endpoint);
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : String(err));
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    if (callByDefault) {
      fetchDataFromApi();
    }
  }, [fetchDataFromApi, callByDefault]);

  const postItem = async <T>(newData: T, newEndpoint?: string, params?: Record<string, any>): Promise<any> => {
    let data: any = undefined;
    setLoading(true);
    try {
       data = await postData<T>(newEndpoint ? newEndpoint : endpoint, newData, params);
      // await fetchDataFromApi();
    } catch (err) {
      setError(err instanceof Error ? err : String(err));
    } finally {
      setLoading(false);
      return data;
    }
  };

  const updateItem = async <T>(id: string, updatedData: T) => {
    setLoading(true);
    try {
      await updateData<T>(endpoint, id, updatedData);
      // await fetchDataFromApi();
    } catch (err) {
      setError(err instanceof Error ? err : String(err));
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id: string) => {
    setLoading(true);
    try {
     let result = await deleteData(endpoint, id);
     console.log('㊙️ DATA:', result);
      // await fetchDataFromApi();
      // return true;
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postItem, updateItem, deleteItem, refetchData: fetchDataFromApi };
};

export default useFetchData;
