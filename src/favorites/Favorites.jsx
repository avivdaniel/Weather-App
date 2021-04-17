import React from 'react';
import {useSelector} from 'react-redux';
import FavoriteCard from '@/components/FavoriteCard';

const Favorites = () => {
  const {favorites} = useSelector(state => state);

  return (
    <div>
      {favorites.length > 0 && favorites.map(({localizedName, locationKey})=> {
        return <FavoriteCard key={locationKey} localizedName={localizedName} locationKey={locationKey} className="bg-blue-200"/>
      })}
    </div>
  );
};

export default Favorites;