import React from 'react';
import {useSelector} from 'react-redux';
import DaysCardList from '@/components/DaysCardList';
import SearchBar from '@/components/SearchBar';

const Home = () => {
  const {errors} = useSelector(state => state);

  return (
    <div className="min-h-screen flex flex-col">
      {errors && <div className="bg-red-200">{errors}</div>}
      <SearchBar />
      <DaysCardList/>
    </div>
  );
};

export default Home;
