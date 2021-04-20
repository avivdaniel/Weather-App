import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DayCard from '@/components/DayCard';
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn';
import { getCurrentWeatherAsync } from '@/redux/cityForecastSlice';
import TodayCard from '@/components/TodayCard';
import Loading from '@/components/Loading';

const DaysCardList = () => {
  const dispatch = useDispatch();

  const {
    localizedName,
    locationKey,
    current,
    isLoading,
    days: cityFiveDaysForecast
  } = useSelector((state)=> state.cityForecast);

  useEffect(()=> {
    locationKey && dispatch(getCurrentWeatherAsync({
      locationKey
    }))
  },[dispatch,locationKey]);

  return (
    <>
      {!isLoading
        ? <div className="day-card-list relative flex-1 flex flex-col justify-between">

          {current && locationKey && localizedName &&
          <TodayCard
            day={current}
            localizedName={localizedName}
            locationKey={locationKey}
            className="current-condition p-4 flex-1 relative">

            <AddToFavoritesBtn
              localizedName={localizedName}
              locationKey={locationKey}
              className="absolute bottom-2 right-2 xl:bottom-4 xl:right-4"/>
          </TodayCard>}

          <div className="bg-gray-800 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 xl:py-4">
            {cityFiveDaysForecast.length > 0 && cityFiveDaysForecast.map((day, i)=> {
              return <DayCard key={i}
                              day={day}/>
            })}
          </div>
        </div>
        : <Loading/> }
    </>
  );
};

export default DaysCardList;