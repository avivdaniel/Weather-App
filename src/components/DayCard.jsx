import React, { useState } from 'react';
import { cn } from '@/utils';

import Icon from '@/components/Icon';

const weekDayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const DayCard = ({
  day: {
    Temperature: temperature,
    Day: day,
    Night: night,
    Date: date,
    ...props
  },
}) => {
  const [open, setOpen] = useState(false);

  const formatDayOfWeek = (date) => {
    if (!date) return;
    const weekDay = new Date(date).getDay();
    return weekDayList[weekDay];
  };

  const {
    Maximum: { Value: maxTemp },
    Minimum: { Value: minTemp },
  } = temperature;
  const { IconPhrase: description, Icon: dayIconNumber } = day;
  const { IconPhrase: nightDescription, Icon: nightIconNumber } = night;

  return (
    <li className="px-4 border-b border-gray-100 py-8 text-white xl:border-l xl:border-b-0 xl:py-0">
      <a
        onClick={() => {
          setOpen(!open);
        }}
        className="block flex justify-between xl:flex-col xl:justify-between xl:items-center xl:pointer-events-none"
      >
        <h3 className="font-bold tracking-wider flex items-center xl:text-4xl">
          <Icon
            number="chevron"
            className={cn(
              'h-4',
              'w-4',
              'fill-current',
              'transform',
              'xl:hidden',
              open && 'rotate-180'
            )}
          />
          <span className="pl-2">{formatDayOfWeek(date)}</span>
        </h3>

        <span className="block pl-2 flex items-center xl:flex-col xl:pl-0">
          <Icon
            number={dayIconNumber}
            className="h-6 w-6 xl:h-16 xl:w-16 xl:py-4"
          />
          <span className="text-center ml-4 xl:ml-0 xl:text-xl">
            {description}
            <span className="block xl:ml-0 xl:text-xl">{`${minTemp} - ${maxTemp} °C`}</span>
          </span>
        </span>
      </a>

      <span
        className={cn(
          'collapsed',
          'block',
          'transition-card',
          'duration-500',
          'ease-linear',
          'xl:text-center',
          open
            ? 'visible py-4 max-h-12 opacity-100'
            : 'invisible py-0 max-h-0 opacity-0 xl:max-h-36 xl:visible xl:opacity-100 xl:py-4'
        )}
      >
        <span className="block">
          <Icon number={dayIconNumber} className="inline h-6 w-6 pr-2" />
          {`${description} over the day`}
        </span>
        <span className="block">
          <Icon number={nightIconNumber} className="inline h-6 w-6 pr-2" />
          {`${nightDescription} over the night`}
        </span>
      </span>
    </li>
  );
};

export default DayCard;
