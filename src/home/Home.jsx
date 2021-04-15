import React from 'react';

import DaysCardList from '@/components/DaysCardList';
import SearchBar from '@/components/SearchBar';

const Home = () => {
  return (
    <div className="">
      <SearchBar />
      <DaysCardList/>
    </div>
  );
};

export default Home;
