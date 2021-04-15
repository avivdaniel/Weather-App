import accuWeatherApi from '@/client.js';
import {apiKey} from '@/config';

export const getCityOptions = async (query) => {
  const { data } = await accuWeatherApi.get(`/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`)
  return data;
}