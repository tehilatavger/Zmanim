import { useState, useCallback } from 'react';

export const useGeolocation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getLocation = useCallback(() => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setError(null);

      if (!navigator.geolocation) {
        const err = "Geolocation is not supported by your browser.";
        setError(err);
        setLoading(false);
        reject(err);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoading(false);
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          const errorMessage = "Location permission denied.";
          setError(errorMessage);
          setLoading(false);
          reject(errorMessage);
        }
      );
    });
  }, []);

  return { getLocation, loading, error };
};
