import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const getZmanim = async (lat, lng, date) => {
  const params = { lat, lng };
  if (date) {
    params.date = date;
  }
  
  const response = await axios.get(`/api/zmanim`, { params });
  return response.data;
};