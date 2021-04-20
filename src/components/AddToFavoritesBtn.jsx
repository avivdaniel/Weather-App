import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '@/redux/favoritesSlice';
import { cn } from '@/utils';
import Icon from '@/components/Icon';

const AddToFavoritesBtn = ({ locationKey, localizedName, className }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const [animateBounce, setAnimateBounce] = useState(false);

  const isFavorite = () => {
    return (
      favorites && favorites.some((fav) => fav.locationKey === locationKey)
    );
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setAnimateBounce(true);
    isFavorite()
      ? dispatch(
          removeFromFavorites({
            locationKey,
          })
        )
      : dispatch(
          addToFavorites({
            localizedName,
            locationKey,
          })
        );
  };

  return (
    <button
      className={cn(
        'h-10 w-10 focus:outline-none',
        animateBounce ? 'animate-bounce' : '',
        className
      )}
      onAnimationEnd={() => setAnimateBounce(false)}
      onClick={handleFavoriteClick}
    >
      <Icon
        number="favorite"
        className={cn(isFavorite() ? 'text-red-600' : 'text-white')}
      />
    </button>
  );
};

export default AddToFavoritesBtn;
