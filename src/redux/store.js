import {configureStore} from '@reduxjs/toolkit';
import cityForecastReducer from './cityForecastSlice';
import favoritesReducer from './favoritesSlice';
import {loadFavorites, saveFavorites} from '@/favorites/service';


const reducer = {
  cityForecast: cityForecastReducer,
  favorites: favoritesReducer
}

const preloadedState = {
  favorites: loadFavorites()
}

const store = configureStore({
  reducer,
  preloadedState
});


export default store;