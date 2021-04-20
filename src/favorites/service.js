import accuWeatherApi from '../client.js';
import {apiKey} from '@/config';

export const loadFavorites = () => {
  try {
    const serializedState = localStorage.getItem('favorites');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export const getCurrentWeather = async (locationKey) => {
  try {
    const {data} = await accuWeatherApi.get(`/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`);
    return data;
  } catch (err) {
    if (err && err.message === 'Network Error') {
      throw new Error('Opps... you may pass the daily limit');
    }
    throw err;
  }
}