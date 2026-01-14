import axios from 'axios';
import { AppError } from '../middleware/errorHandler';

export const fetchZmanim = async (lat: string, lng: string, date?: string) => {
  const url = `https://www.hebcal.com/zmanim`;
  
  try {
    const params: any = {
      cfg: 'json',
      latitude: lat,
      longitude: lng,
    };
    
    if (date) {
      params.date = date;
    }

    const response = await axios.get(url, {
      params,
      timeout: 5000,
    });

    if (!response.data?.times) {
      throw new AppError('Invalid response from Hebcal API', 502);
    }

    const { times, location } = response.data;
    
    return {
      dawn: times.alotHaShachar,
      sunrise: times.sunrise,
      shema: times.sofZmanShma,
      midday: times.chatzot,
      mincha: times.minchaGedola,
      sunset: times.sunset,
      nightfall: times.tzeit7083deg,
      location: location?.name || 'Unknown location'
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new AppError('Request timeout - Hebcal API not responding', 504);
      }
      if (error.response?.status) {
        throw new AppError(`Hebcal API error: ${error.response.status}`, 502);
      }
      throw new AppError('Unable to connect to Hebcal API', 503);
    }
    throw error;
  }
};