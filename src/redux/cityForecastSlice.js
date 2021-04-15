import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {apiKey} from '@/config';
import accuWeatherApi from '@/client';

export const getFiveDayWeatherAsync = createAsyncThunk('cityForecast/getFiveDayWeatherAsync', async({locationKey})=> {
  try {
    const { data: {DailyForecasts} } = await accuWeatherApi.get(`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${true}`);
    console.log(DailyForecasts)
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
      console.log('fetch 5 dayes...')
    },
    [getFiveDayWeatherAsync.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
})

export default cityForecastSlice.reducer;

