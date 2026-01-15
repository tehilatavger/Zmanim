import { useMemo } from 'react';
import { ZMANIM_LABELS, ALL_ZMANIM } from '../constants';

export const useNextZman = (data, currentTime) => {
  return useMemo(() => {
    if (!data) return null;
    
    const candidateTimes = ALL_ZMANIM
      .filter(key => data[key])
      .map(key => ({
        label: ZMANIM_LABELS[key],
        time: new Date(data[key])
      }))
      .sort((a, b) => a.time - b.time);

    return candidateTimes.find((z) => z.time > currentTime) || null;
  }, [data, currentTime]);
};
