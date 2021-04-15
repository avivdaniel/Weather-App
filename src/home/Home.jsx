import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getFiveDayWeatherAsync} from '../redux/cityForecastSlice';
import { getCityOptions } from './service';

import DaysCardList from '@/components/DaysCardList';
import SearchBar from '@/components/SearchBar';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="prose prose-blue lg:prose-xl">
      <SearchBar />
      <DaysCardList/>
    </div>
  );
};

export default Home;
