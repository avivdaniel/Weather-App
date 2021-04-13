import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getFiveDayWeatherAsync} from '../redux/cityForecastSlice';
import { getCityOptions } from './service';

import DaysCardList from '@/components/DaysCardList';
import SearchBar from '@/components/SearchBar';

const Home = () => {
  const dispatch = useDispatch();
  const cityForecast = useSelector((state)=> state.cityForecast)

  const [query, setQuery] = useState('');
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(()=> {
    dispatch(getFiveDayWeatherAsync({
      locationKey: '215854'
    }))
  }, [dispatch]);

  useEffect(()=> {
    (async ()=> {
      try {
        if (query.length > 0) {
          const cityOptions = await getCityOptions(query);
          console.log({cityOptions})
        }
      } catch (err) {
        console.error(err);
      }

    })();
  }, [query]);


  return (
    <div className="prose prose-blue lg:prose-xl">
      <SearchBar query={query}
                 setQuery={setQuery}
                 cityOptions={cityOptions}
                 setCityOptions={setCityOptions}
      />
      <DaysCardList/>
    </div>
  );
};

export default Home;
