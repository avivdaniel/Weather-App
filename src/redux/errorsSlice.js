import {createSlice} from '@reduxjs/toolkit';
import {getFiveDayWeatherAsync, getCurrentWeatherAsync} from '@/redux/cityForecastSlice';

export const errorsSlice = createSlice({
  name: 'errors',
  initialState: "",
  reducers: {
    receiveErrors: (state, action) => {
      return action.payload.error;
    },
    cleanErrors: () => {
      return '';
    }
  },
  extraReducers: {
    [getFiveDayWeatherAsync.pending]: () => '',
    [getFiveDayWeatherAsync.rejected]: (state, action) => {
      return action.error.message;
    },
    [getCurrentWeatherAsync.pending]: () => '',
    [getCurrentWeatherAsync.rejected]: (state, action) => {
      return action.error.message;
    },
  }
});
export const {receiveErrors, cleanErrors} = errorsSlice.actions;
export default errorsSlice.reducer;