import React, { useEffect } from 'react';
import Icon from '@/components/Icon';

const weekDayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const DayCard = ({date = {}, day = {}, night = {}, temperature = {}, ...props}) => {

  const formatDayOfWeek = (date) => {
    if (!date) return;
    const weekDay = new Date(date).getDay();
    return weekDayList[weekDay];
  }

  const { Maximum: {Value: maxTemp}, Minimum: {Value: minTemp}} = temperature;
  const { IconPhrase: description, Icon: dayIconNumber } = day;
  const { Icon: nightIconNumber } = night;

  return (
    <div className="text-white shadow-lg p-6 border border-white rounded-xl space-y-4">
      <h3>
         {formatDayOfWeek(date)}
      </h3>

      <span className="block">date: {date}</span>
      <span className="block">{description}</span>
      <span className="block">day: {minTemp}</span>
      <Icon number={dayIconNumber}/>
      <span className="block">night: {maxTemp}</span>
      <Icon number={nightIconNumber}/>
    </div>
  );
};

export default DayCard;