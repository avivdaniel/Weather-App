import React from 'react';
import Icon from '@/components/Icon';

const weekDayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const DayCard = ({
  day: { Temperature: temperature, Day: day, Date: date, ...props },
}) => {
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

  return (
    <div className="px-4 border-b border-gray-100 py-8 text-white flex justify-between xl:border-l xl:border-b-0 xl:flex-col xl:justify-between xl:items-center xl:h-30">
      <h3 className="font-bold xl:text-4xl tracking-wider">
        {formatDayOfWeek(date)}
      </h3>

      <div className="pl-2 flex items-center xl:flex-col xl:pl-0">
        <Icon
          number={dayIconNumber}
          className="h-6 w-6 xl:h-16 xl:w-16 xl:py-4"
        />
        <span className="text-center ml-4 xl:ml-0 xl:text-xl">
          {description}
          <span className="block xl:ml-0 xl:text-xl">{`${minTemp} - ${maxTemp} °C`}</span>
        </span>
      </div>
    </div>
  );
};

export default DayCard;
