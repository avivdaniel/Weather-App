import React, { useEffect, useState } from 'react';
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn';
import { getCurrentWeather } from '@/favorites/service';
import {useDispatch} from 'react-redux';
import {getFiveDayWeatherAsync} from '@/redux/cityForecastSlice';
import Icon from '@/components/Icon';
import { useHistory } from "react-router-dom";
import { path } from '@/home/route';
import Loading from '@/components/Loading';
import {cleanErrors, receiveErrors} from '@/redux/errorsSlice';

const FavoriteCard = ({localizedName, locationKey}) => {
  const [currentCondition, setCurrentCondition] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let history = useHistory();

  const expandCityWeather = (e) => {
    e.stopPropagation();
    dispatch(getFiveDayWeatherAsync({
      locationKey,
      localizedName
    }))
    history.push(path);
  }

  useEffect(()=> {
    (async () => {
      try {
        dispatch(cleanErrors())
        setLoading(true);
        const [currentCondition] = await getCurrentWeather(locationKey);
        setCurrentCondition(currentCondition);
      } catch (error) {
        dispatch(receiveErrors({
          error: error.message
        }))
        console.error(error)
      }
    })();
    setLoading(false);
  }, [locationKey]);

  return (
    <li className="flex flex-col justify-center items-center space-y-4 text-white p-4 rounded-xl shadow-lg shadow-lg bg-gray-800 list-none h-52" onClick={expandCityWeather}>
      {!loading
        ? <>
          <p>{localizedName}</p>
          <Icon number={currentCondition?.WeatherIcon}/>
          <p>{currentCondition?.WeatherText}</p>
          <p>{currentCondition?.Temperature?.Metric?.Value}</p>
          <AddToFavoritesBtn localizedName={localizedName} locationKey={locationKey}/>
        </>
        : <Loading/>}
    </li>
  );
};

export default FavoriteCard;