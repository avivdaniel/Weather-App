import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites: (state = [], action) => {
      console.log('add To fav@');
      const newFavorite = {
        localizedName: action.payload.localizedName,
        locationKey: action.payload.locationKey
      }
      state.push(newFavorite);
      localStorage.setItem('favorites', JSON.stringify(state));
    },
    removeFromFavorites: (state = [], action) => {
      console.log('remove from fab!');
      const filteredFav = state.filter(favorite => favorite.locationKey !== action.payload.locationKey);
      localStorage.setItem('favorites', JSON.stringify(filteredFav));
      return filteredFav;

    },
  }
});

export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;