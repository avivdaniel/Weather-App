import React, { useEffect } from 'react';
import { cn } from '@/utils';
import Icon from '@/components/Icon';

const TodayCard = ({day = {}, localizedName, children, className}) => {

  const  {
    WeatherText: description,
    WeatherIcon: iconNum,
    Temperature: temp
  } = day;
  console.log(temp)

  // WeatherIcon: icon,
  // Temperature: {Metric: {Value: temp, Unit: unit}}


  return (
    <div className={cn(className)}>
      {localizedName && <h1>{localizedName}</h1>}
      {description && <span className="block">{description}</span>}
      {temp &&
      <>
        <span>{temp?.Metric?.Value}</span>
      </>}
      {iconNum && <Icon number={iconNum}/>}
      {children}
    </div>
  );
};

export default TodayCard;