import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorites, removeFromFavorites} from '@/redux/favoritesSlice';
import { cn } from '@/utils';

const AddToFavoritesBtn = ({locationKey, localizedName}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const isFavorite = () => {
   return favorites && favorites.some(fav => fav.locationKey === locationKey);
  }

  const handleFavoriteClick = () => {
    isFavorite()
    ?  dispatch(removeFromFavorites({
        locationKey
      }))
    : dispatch(addToFavorites({
        localizedName,
        locationKey,
      }))
  }

  return (
    <button className={cn([isFavorite() ? 'text-red-600': 'text-green-100'])} onClick={handleFavoriteClick}>
      {isFavorite() ? 'removed from' : 'add To fav'}
    </button>
  );
};

export default AddToFavoritesBtn;