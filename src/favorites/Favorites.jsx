import React from 'react';
import {useSelector} from 'react-redux';
import useStickyState from '@/hooks/useStickyState';

const Favorites = () => {
  const {favorites} = useSelector(state => state);

  return (
    <div>
      {favorites.length > 0 && favorites.map(fav=> {
        return <div className="bg-blue-200">{fav.localizedName
        }</div>
      })}
    </div>
  );
};

export default Favorites;