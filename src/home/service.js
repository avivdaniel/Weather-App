import accuWeatherApi from '@/client.js';

import {apiKey} from '@/config';

export const getCityOptions = async (query) => {
  const { data } = await accuWeatherApi.get(`/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`)
  return data;
}

export const getFiveDayWeather = async (locationKey) => {
  const { data } =  await accuWeatherApi.get(`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${true}`);
  return data;
}