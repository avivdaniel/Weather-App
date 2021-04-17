import {configureStore} from '@reduxjs/toolkit';
import cityForecastReducer from './cityForecastSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    cityForecast: cityForecastReducer,
    favorites: favoritesReducer
  }
})

export default store;