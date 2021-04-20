import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getFiveDayWeatherAsync } from '@/redux/cityForecastSlice';
import { cleanErrors, receiveErrors } from '@/redux/errorsSlice';
import { getCurrentWeather } from '@/favorites/service';
import { path } from '@/home/route';

import AddToFavoritesBtn from '@/components/AddToFavoritesBtn';
import Icon from '@/components/Icon';
import Loading from '@/components/Loading';

const FavoriteCard = ({ localizedName, locationKey }) => {
  const [currentCondition, setCurrentCondition] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let history = useHistory();

  const expandCityWeather = (e) => {
    e.stopPropagation();
    dispatch(
      getFiveDayWeatherAsync({
        locationKey,
        localizedName,
      })
    );
    history.push(path);
  };

  useEffect(() => {
    (async () => {
      try {
        dispatch(cleanErrors());
        setLoading(true);
        const [currentCondition] = await getCurrentWeather(locationKey);
        setCurrentCondition(currentCondition);
      } catch (error) {
        dispatch(
          receiveErrors({
            error: error.message,
          })
        );
        console.error(error);
      }
    })();
    setLoading(false);
  }, [locationKey]);

  return (
    <li
      className="relative flex flex-col justify-center items-center text-white p-4 rounded-xl shadow-lg shadow-lg bg-gray-800 list-none h-72"
      onClick={expandCityWeather}
    >
      {!loading ? (
        <>
          <span className="text-4xl pb-4">{localizedName}</span>

          <span className="flex items-center">
            <Icon
              number={currentCondition?.WeatherIcon}
              className="w-28 h-28"
            />
            <span className="text-center ml-5">
              <span className="block">{currentCondition?.WeatherText}</span>
              {currentCondition?.Temperature?.Metric?.Value && (
                <span className="block">
                  {`${currentCondition?.Temperature?.Metric?.Value} °C`}
                </span>
              )}
            </span>
          </span>
          <AddToFavoritesBtn
            localizedName={localizedName}
            locationKey={locationKey}
            className="absolute right-2 bottom-2"
          />
        </>
      ) : (
        <Loading />
      )}
    </li>
  );
};

export default FavoriteCard;
