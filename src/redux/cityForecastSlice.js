import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {apiKey} from '@/config';
import accuWeatherApi from '@/client';

export const getFiveDayWeatherAsync = createAsyncThunk('cityForecast/getFiveDayWeatherAsync', async({locationKey, localizedName})=> {
  try {
    // const { data: {DailyForecasts: days} } = await accuWeatherApi.get(`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${true}`);

   const  days = [
        {
          "Date": "2021-04-15T07:00:00+03:00",
          "EpochDate": 1618459200,
          "Temperature": {
            "Minimum": {
              "Value": 16.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 26.0,
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
          "Date": "2021-04-16T07:00:00+03:00",
          "EpochDate": 1618545600,
          "Temperature": {
            "Minimum": {
              "Value": 17.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 26.3,
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
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2021-04-17T07:00:00+03:00",
          "EpochDate": 1618632000,
          "Temperature": {
            "Minimum": {
              "Value": 18.2,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 27.6,
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
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2021-04-15T07:00:00+03:00",
          "EpochDate": 1618459200,
          "Temperature": {
            "Minimum": {
              "Value": 16.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 26.0,
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
          "Date": "2021-04-19T07:00:00+03:00",
          "EpochDate": 1618804800,
          "Temperature": {
            "Minimum": {
              "Value": 25.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 34.9,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
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

    return {
       localizedName,
       days,
       locationKey,
     };
  } catch (err) {
    throw new Error(err)
  }
});

const cityForecastSlice = createSlice({
  name: 'cityForecast',
  initialState: {
    localizedName: undefined,
    days: [],
    locationKey: undefined,
    isLoading: false
  },
  reducers:{},
  extraReducers: {
    [getFiveDayWeatherAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getFiveDayWeatherAsync.fulfilled]: (state, action) => {
      console.log('payload:' ,action.payload)
      return {
        ...action.payload,
        isLoading: false
      };
    }
  }
})

export default cityForecastSlice.reducer;

