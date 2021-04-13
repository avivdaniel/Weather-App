import {configureStore} from '@reduxjs/toolkit';
import cityForecastReducer from './cityForecastSlice';

const store = configureStore({
  reducer: {
    cityForecast: cityForecastReducer
  }
})

export default store;