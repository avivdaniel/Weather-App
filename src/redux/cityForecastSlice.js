import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getFiveDayWeather} from '@/services/services';
import {apiKey, baseURL} from '@/config';
import accuWeatherApi from '@/client';

export const getFiveDayWeatherAsync = createAsyncThunk('cityForecast/getFiveDayWeatherAsync', async({locationKey})=> {
  try {

    // const { data: {DailyForecasts} } = await accuWeatherApi.get(`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${true}`);
   const DailyForecasts = [
     {
       "Date": "2021-04-13T07:00:00+03:00",
       "EpochDate": 1618286400,
       "Temperature": {
         "Minimum": {
           "Value": 12.6,
           "Unit": "C",
           "UnitType": 17
         },
         "Maximum": {
           "Value": 20.3,
           "Unit": "C",
           "UnitType": 17
         }
       },
       "Day": {
         "Icon": 2,
         "IconPhrase": "Mostly sunny",
         "HasPrecipitation": false
       },
       "Night": {
         "Icon": 35,
         "IconPhrase": "Partly cloudy",
         "HasPrecipitation": false
       },
       "Sources": [
         "AccuWeather"
       ],
       "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
       "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
     },
     {
       "Date": "2021-04-14T07:00:00+03:00",
       "EpochDate": 1618372800,
       "Temperature": {
         "Minimum": {
           "Value": 14.4,
           "Unit": "C",
           "UnitType": 17
         },
         "Maximum": {
           "Value": 23.3,
           "Unit": "C",
           "UnitType": 17
         }
       },
       "Day": {
         "Icon": 2,
         "IconPhrase": "Mostly sunny",
         "HasPrecipitation": false
       },
       "Night": {
         "Icon": 35,
         "IconPhrase": "Partly cloudy",
         "HasPrecipitation": false
       },
       "Sources": [
         "AccuWeather"
       ],
       "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
       "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
     },
     {
       "Date": "2021-04-15T07:00:00+03:00",
       "EpochDate": 1618459200,
       "Temperature": {
         "Minimum": {
           "Value": 15.1,
           "Unit": "C",
           "UnitType": 17
         },
         "Maximum": {
           "Value": 23.7,
           "Unit": "C",
           "UnitType": 17
         }
       },
       "Day": {
         "Icon": 1,
         "IconPhrase": "Sunny",
         "HasPrecipitation": false
       },
       "Night": {
         "Icon": 35,
         "IconPhrase": "Partly cloudy",
         "HasPrecipitation": false
       },
       "Sources": [
         "AccuWeather"
       ],
       "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
       "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
     },
     {
       "Date": "2021-04-16T07:00:00+03:00",
       "EpochDate": 1618545600,
       "Temperature": {
         "Minimum": {
           "Value": 16.6,
           "Unit": "C",
           "UnitType": 17
         },
         "Maximum": {
           "Value": 24.2,
           "Unit": "C",
           "UnitType": 17
         }
       },
       "Day": {
         "Icon": 6,
         "IconPhrase": "Mostly cloudy",
         "HasPrecipitation": false
       },
       "Night": {
         "Icon": 33,
         "IconPhrase": "Clear",
         "HasPrecipitation": false
       },
       "Sources": [
         "AccuWeather"
       ],
       "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
       "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
     },
     {
       "Date": "2021-04-17T07:00:00+03:00",
       "EpochDate": 1618632000,
       "Temperature": {
         "Minimum": {
           "Value": 19.0,
           "Unit": "C",
           "UnitType": 17
         },
         "Maximum": {
           "Value": 26.5,
           "Unit": "C",
           "UnitType": 17
         }
       },
       "Day": {
         "Icon": 2,
         "IconPhrase": "Mostly sunny",
         "HasPrecipitation": false
       },
       "Night": {
         "Icon": 35,
         "IconPhrase": "Partly cloudy",
         "HasPrecipitation": false
       },
       "Sources": [
         "AccuWeather"
       ],
       "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
       "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
     }
   ]
    return DailyForecasts;
  } catch (err) {
    throw new Error(err)
  }
});

const cityForecastSlice = createSlice({
  name: 'cityForecast',
  initialState: [],
  reducers:{},
  extraReducers: {
    [getFiveDayWeatherAsync.pending]: (state, action) => {
      console.log('fetching data....')
    },
    [getFiveDayWeatherAsync.fulfilled]: (state, action) => {
      console.log('data fetched successfully!')
      console.log('action payload:', action.payload)
      return action.payload;
    }
  }
})

export default cityForecastSlice.reducer;

