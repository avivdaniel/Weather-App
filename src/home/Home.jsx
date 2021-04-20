import React from 'react';
import DaysCardList from '@/components/DaysCardList';
import SearchBar from '@/components/SearchBar';

const Home = () => {
  return (
    <div className="home flex flex-1 flex-col">
      <SearchBar />
      <DaysCardList />
    </div>
  );
};

export default Home;
