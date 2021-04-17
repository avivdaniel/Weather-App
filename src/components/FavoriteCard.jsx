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
    <div className="p-4 border border-white shadow-lg" onClick={expandCityWeather}>
      <AddToFavoritesBtn localizedName={localizedName} locationKey={locationKey}/>
      <p>{localizedName}</p>
      <Icon number={currentCondition?.WeatherIcon}/>
      <p>{currentCondition?.WeatherText}</p>
      <p>{currentCondition?.Temperature?.Metric?.Value}</p>
    </div>
  );
};

export default FavoriteCard;