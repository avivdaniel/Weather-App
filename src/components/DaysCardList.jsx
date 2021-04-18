import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DayCard from '@/components/DayCard';
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn';
import { getCurrentWeatherAsync } from '@/redux/cityForecastSlice';

const DaysCardList = () => {
  const {
    localizedName,
    locationKey,
    days: cityFiveDaysForecast
  } = useSelector((state)=> state.cityForecast);

  const dispatch = useDispatch();

  // useEffect(()=> {
  //  localizedName && console.log('only when name change')
  // },[localizedName])

  useEffect(()=> {
    locationKey && dispatch(getCurrentWeatherAsync({
      locationKey
    }))
  },[dispatch,locationKey]);


  return (
    <div className="flex-1 flex flex-col justify-between">

      <div className="current-condition p-4 flex-1 relative">
      <h2 className="font-bold">{localizedName ? `The city :${localizedName}` : 'Welcome!'}</h2>
      <AddToFavoritesBtn localizedName={localizedName} locationKey={locationKey} className="absolute bottom-2 right-2 xl:bottom-4 xl:right-4"/>
      </div>

<div className="bg-gray-800 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 xl:py-4">
  {cityFiveDaysForecast.length > 0 && cityFiveDaysForecast.map((day, i)=> {
    return <DayCard key={i}
                    day={day}/>
  })}
</div>
    </div>
  );
};

export default DaysCardList;