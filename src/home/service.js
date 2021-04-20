import accuWeatherApi from '@/client.js';
import axios from 'axios';

import {apiKey} from '@/config';

export const getCityOptions = async (query) => {
  try  {
  const { data } = await accuWeatherApi.get(`/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`)
  return data;
  } catch (err) {
    if (err && err.message === 'Network Error') {
      throw new Error('Opps... you may pass the daily limit');
    }
    throw err;
  }
}

export const getFiveDayWeather = async (locationKey) => {
  try {
    const { data } =  await accuWeatherApi.get(`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${true}`);
    return data;
  } catch (err) {
    if (err && err.message === 'Network Error') {
      throw new Error('Opps... you may pass the daily limit');
    }
    throw err;
  }
}