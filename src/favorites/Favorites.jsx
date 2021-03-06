import React from 'react';
import { useSelector } from 'react-redux';

import FavoriteCard from '@/components/FavoriteCard';

const Favorites = () => {
  const { favorites } = useSelector((state) => state);

  return (
    <ul className="container mx-auto gap-4 space-y-4 p-4 grid grid-cols-1 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 ">
      {favorites.length > 0 &&
        favorites.map(({ localizedName, locationKey }) => {
          return (
            <FavoriteCard
              key={locationKey}
              localizedName={localizedName}
              locationKey={locationKey}
              className="bg-blue-200"
            />
          );
        })}
    </ul>
  );
};

export default Favorites;
