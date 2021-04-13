
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getFiveDayWeatherAsync} from '../redux/cityForecastSlice';
import DaysCardList from '@/components/DaysCardList';

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
    <DaysCardList/>
    </div>
  );
};

export default Home;
