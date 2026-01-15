import { useState, useCallback } from 'react';
import { getZmanim as fetchZmanim } from '../services/api';

export const useZmanim = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getZmanim = useCallback(async (latitude, longitude, date) => {
    setLoading(true);
    setError(null);

    try {
      const formattedDate = date ? date.toISOString().split('T')[0] : undefined;
      const response = await fetchZmanim(latitude, longitude, formattedDate);
      const zmanimData = response.data || response;
      setData(zmanimData);
      return zmanimData;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          "There is a problem, try again later.";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, getZmanim };
};
