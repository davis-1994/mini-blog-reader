'use client';

import { useEffect, useState, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface UseFetchOptions {
  manual?: boolean;
  config?: AxiosRequestConfig;
}

export function useFetch<T = any>(url: string, options?: UseFetchOptions) {
  const [data, setData] = useState<T | [null] | null>([null]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(!options?.manual);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios(url, options?.config);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, options?.config]);

  useEffect(() => {
    if (!options?.manual) {
      fetchData();
    }
  }, [fetchData, options?.manual]);

  return { data, error, loading, refetch: fetchData };
}
