import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentWeather } from '@/favorites/service';
import { getFiveDayWeather } from '@/home/service';

export const getFiveDayWeatherAsync = createAsyncThunk(
  'cityForecast/getFiveDayWeatherAsync',
  async ({ locationKey, localizedName }) => {
    try {
      // const { DailyForecasts: days } = await getFiveDayWeather(locationKey);
      const { DailyForecasts: days } = {
        Headline: {
          EffectiveDate: '2021-04-17T08:00:00+03:00',
          EffectiveEpochDate: 1618635600,
          Severity: 4,
          Text: 'Pleasant Saturday',
          Category: 'mild',
          EndDate: null,
          EndEpochDate: null,
          MobileLink:
            'http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us',
          Link:
            'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
        },
        DailyForecasts: [
          {
            Date: '2021-04-13T07:00:00+03:00',
            EpochDate: 1618286400,
            Temperature: {
              Minimum: {
                Value: 12.6,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 20.3,
                Unit: 'C',
                UnitType: 17,
              },
            },
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
            Link:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
          },
          {
            Date: '2021-04-14T07:00:00+03:00',
            EpochDate: 1618372800,
            Temperature: {
              Minimum: {
                Value: 14.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.3,
                Unit: 'C',
                UnitType: 17,
              },
            },
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
            Link:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
          },
          {
            Date: '2021-04-15T07:00:00+03:00',
            EpochDate: 1618459200,
            Temperature: {
              Minimum: {
                Value: 15.1,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.7,
                Unit: 'C',
                UnitType: 17,
              },
            },
            Day: {
              Icon: 1,
              IconPhrase: 'Sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
            Link:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
          },
          {
            Date: '2021-04-16T07:00:00+03:00',
            EpochDate: 1618545600,
            Temperature: {
              Minimum: {
                Value: 16.6,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 24.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            Day: {
              Icon: 6,
              IconPhrase: 'Mostly cloudy',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 33,
              IconPhrase: 'Clear',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
            Link:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
          },
          {
            Date: '2021-04-17T07:00:00+03:00',
            EpochDate: 1618632000,
            Temperature: {
              Minimum: {
                Value: 19.0,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 26.5,
                Unit: 'C',
                UnitType: 17,
              },
            },
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
            Link:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
          },
        ],
      };
      return {
        localizedName,
        days,
        locationKey,
      };
    } catch (err) {
      if (err?.response?.data?.Message) {
        throw new Error(err?.response?.data?.Message);
      }
      throw err;
    }
  }
);

export const getCurrentWeatherAsync = createAsyncThunk(
  'cityForecasr/getCurrentWeatherAsync',
  async ({ locationKey }) => {
    try {
      const [currentWeather] = await getCurrentWeather(locationKey);
      return currentWeather;
    } catch (err) {
      if (err?.response?.data?.Message) {
        throw new Error(err?.response?.data?.Message);
      }
      throw err;
    }
  }
);

const cityForecastSlice = createSlice({
  name: 'cityForecast',
  initialState: {
    localizedName: undefined,
    days: [],
    current: {},
    locationKey: undefined,
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getFiveDayWeatherAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getFiveDayWeatherAsync.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getFiveDayWeatherAsync.fulfilled]: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
    [getCurrentWeatherAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCurrentWeatherAsync.fulfilled]: (state, action) => {
      return {
        ...state,
        current: action.payload,
        isLoading: false,
      };
    },
    [getCurrentWeatherAsync.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default cityForecastSlice.reducer;
