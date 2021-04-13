import accuWeatherApi from '@/client.js';
import {apiKey} from '@/config';

export const getFiveDayWeather = async (locationKey) => {
  try {
  const { data: {DailyForecasts}  } = await accuWeatherApi.get(`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${true}`);
  return DailyForecasts;
  } catch (err) {
    throw new Error(err)
  }
};
