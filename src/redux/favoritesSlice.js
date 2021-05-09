import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites: (state = [], action) => {
      const newFavorite = {
        localizedName: action.payload.localizedName,
        locationKey: action.payload.locationKey,
      };
      localStorage.setItem('favorites', JSON.stringify(state));
      return [...state, newFavorite];
    },
    removeFromFavorites: (state = [], action) => {
      const filteredFav = state.filter(
        (favorite) => favorite.locationKey !== action.payload.locationKey
      );
      localStorage.setItem('favorites', JSON.stringify(filteredFav));
      return filteredFav;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
