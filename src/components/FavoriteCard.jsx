import React, { useEffect, useState } from 'react';
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn';
import { getCurrentWeather } from '@/favorites/service';
import {useDispatch} from 'react-redux';
import {getFiveDayWeatherAsync} from '@/redux/cityForecastSlice';
import Icon from '@/components/Icon';
import { useHistory } from "react-router-dom";
import { path } from '@/home/route';

const FavoriteCard = ({localizedName, locationKey}) => {
  const [currentCondition, setCurrentCondition] =useState({});

  const dispatch = useDispatch();
  let history = useHistory();

  const expandCityWeather = () => {
    dispatch(getFiveDayWeatherAsync({
      locationKey,
      localizedName
    }))
    history.push(path);
  }

  useEffect(()=> {
    (async () => {
      const [currentCondition] = await getCurrentWeather(locationKey);
      console.log(currentCondition);
      setCurrentCondition(currentCondition);
    })();
  }, [locationKey]);

  return (
    <li className="flex flex-col justify-center items-center space-y-4 text-white p-4 rounded-xl shadow-lg shadow-lg bg-gray-800 list-none h-52" onClick={expandCityWeather}>
      <p>{localizedName}</p>
      <Icon number={currentCondition?.WeatherIcon}/>
      <p>{currentCondition?.WeatherText}</p>
      <p>{currentCondition?.Temperature?.Metric?.Value}</p>
      <AddToFavoritesBtn localizedName={localizedName} locationKey={locationKey}/>
    </li>
  );
};

export default FavoriteCard;