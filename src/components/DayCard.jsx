import React, { useEffect } from 'react';

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
  const { IconPhrase: description} = day;

  return (
    <div className="text-white p-6 border border-white rounded-xl space-y-4">
      <h3>
         {formatDayOfWeek(date)}
      </h3>

      <span className="block">date: {date}</span>
      <span className="block">{description}</span>
      <span className="block">day: {minTemp}</span>
      <span className="block">night: {maxTemp}</span>
    </div>
  );
};

export default DayCard;