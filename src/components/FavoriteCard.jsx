import React from 'react';
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn';

const FavoriteCard = ({localizedName, locationKey}) => {
  return (
    <div className="p-4 border border-white shadow-lg">
      <AddToFavoritesBtn localizedName={localizedName} locationKey={locationKey}/>
      <p>{localizedName}</p>
    </div>
  );
};

export default FavoriteCard;