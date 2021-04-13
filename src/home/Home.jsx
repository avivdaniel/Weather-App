
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getFiveDayWeatherAsync} from '../redux/cityForecastSlice';
import DaysCardList from '@/components/DaysCardList';
import SearchBar from '@/components/SearchBar';

const Home = () => {
  const dispatch = useDispatch();
  const cityForecast = useSelector((state)=> state.cityForecast)

  useEffect(()=> {
    dispatch(getFiveDayWeatherAsync({
      locationKey: '215854'
    }))
  }, [dispatch])

  useEffect(()=> {
    console.log(cityForecast)
  }, [cityForecast])

  return (
    <div className="prose prose-blue lg:prose-xl">
      <SearchBar/>
    <DaysCardList/>
    </div>
  );
};

export default Home;
