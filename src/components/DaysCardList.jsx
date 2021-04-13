import React from 'react';
import {useSelector} from 'react-redux';
import DayCard from '@/components/DayCard';

const DaysCardList = () => {
  const days = useSelector((state => state.cityForecast))

  return (
    <div className="space-y-6">
      {days.length > 0 && days.map(({Day, Night, Date, Temperature, ...rest}, i)=> {
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