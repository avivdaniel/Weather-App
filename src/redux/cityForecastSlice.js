import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentWeather } from '@/favorites/service';
import { getFiveDayWeather } from '@/home/service';

export const getFiveDayWeatherAsync = createAsyncThunk(
  'cityForecast/getFiveDayWeatherAsync',
  async ({ locationKey, localizedName }) => {
    try {
      const { DailyForecasts: days } = await getFiveDayWeather(locationKey);
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
  },
});

export default cityForecastSlice.reducer;
