import React from 'react';
import {useSelector} from 'react-redux';
import DayCard from '@/components/DayCard';

const DaysCardList = () => {
  const cityForecast = useSelector((state)=> state.cityForecast.days)
  const cityName = useSelector((state)=> state.cityForecast.localizedName)

  return (
    <div className="max-w-screen-md lg:max-w-screen-lg mx-auto space-y-6">
      <h2 className="font-bold">{cityName ? `The city :${cityName}` : 'Welcome!'}</h2>
      {cityForecast.length > 0 && cityForecast.map(({Day, Night, Date, Temperature, ...rest}, i)=> {
        return <DayCard key={i}
                        date={Date}
                        day={Day}
                        temperature={Temperature}
                        night={Night}
                        {...rest}/>
      })}
    </div>
  );
};

export default DaysCardList;