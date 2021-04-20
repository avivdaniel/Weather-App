import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCurrentWeatherAsync } from '@/redux/cityForecastSlice';

import DayCard from '@/components/DayCard';
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn';
import TodayCard from '@/components/TodayCard';
import Loading from '@/components/Loading';

const DaysCardList = () => {
  const dispatch = useDispatch();

  const {
    localizedName,
    locationKey,
    current,
    isLoading,
    days: cityFiveDaysForecast,
  } = useSelector((state) => state.cityForecast);

  useEffect(() => {
    locationKey &&
      dispatch(
        getCurrentWeatherAsync({
          locationKey,
        })
      );
  }, [dispatch]);

  return (
    <>
      {!isLoading ? (
        <div className="day-card-list h-full relative flex-1 flex flex-col justify-between">
          {current && locationKey && localizedName && (
            <TodayCard
              day={current}
              localizedName={localizedName}
              locationKey={locationKey}
              className="current-condition px-4 py-10 flex-1 relative"
            >
              <AddToFavoritesBtn
                localizedName={localizedName}
                locationKey={locationKey}
                className="absolute bottom-2 right-2 xl:bottom-4 xl:right-4 xl:h-20 xl:w-20"
              />
            </TodayCard>
          )}

          {cityFiveDaysForecast.length > 0 && (
            <ul className="bg-gray-800 grid grid-cols-1 xl:grid-cols-5 xl:py-4">
              {cityFiveDaysForecast.map((day, i) => {
                return <DayCard key={i} day={day} />;
              })}
            </ul>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DaysCardList;
