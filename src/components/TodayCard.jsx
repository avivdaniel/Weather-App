import React, { useEffect } from 'react';
import { cn } from '@/utils';

import Icon from '@/components/Icon';

const TodayCard = ({ day = {}, localizedName, children, className }) => {
  const {
    WeatherText: description,
    WeatherIcon: iconNum,
    Temperature: temp,
  } = day;

  return (
    <div className={cn('text-gray-600 flex flex-col', className)}>
      {localizedName && (
        <h1 className="text-6xl font-extrabold tracking-wide text-center">
          {localizedName}
        </h1>
      )}

      <div className="flex-1 flex items-center justify-center">
        <div className="relative flex flex-col justify-center items-center">
          {description && (
            <span className="font-bold text-2xl block self-start pl-2">
              {description}
            </span>
          )}

          {iconNum && (
            <Icon number={iconNum} className="w-48 h-48 lg:w-72 lg:h-72" />
          )}

          {temp && (
            <span className="text-xl font-bold absolute bottom-0 right-2">
              {temp?.Metric?.Value + '°C'}
            </span>
          )}
        </div>
      </div>

      {children}
    </div>
  );
};

export default TodayCard;
