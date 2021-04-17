import React from 'react';
import {useSelector} from 'react-redux';
import FavoriteCard from '@/components/FavoriteCard';

const Favorites = () => {
  const {favorites} = useSelector(state => state);

  console.log(favorites)
  return (
    <ul className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4">
      {favorites.length > 0 && favorites.map(({localizedName, locationKey})=> {
        return <FavoriteCard key={locationKey} localizedName={localizedName} locationKey={locationKey} className="bg-blue-200"/>
      })}
    </ul>
  );
};

export default Favorites;