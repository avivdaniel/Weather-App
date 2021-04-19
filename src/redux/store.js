import {configureStore} from '@reduxjs/toolkit';
import {loadFavorites} from '@/favorites/service';

import cityForecastReducer from './cityForecastSlice';
import favoritesReducer from './favoritesSlice';
import errorsReducer from './errorsSlice';


const reducer = {
  cityForecast: cityForecastReducer,
  favorites: favoritesReducer,
  errors: errorsReducer
}

const preloadedState = {
  favorites: loadFavorites()
}

const store = configureStore({
  reducer,
  preloadedState
});


export default store;