import React from "react";

export default function FormattedDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[props.date.getDay()];
  const hours = props.date.getHours();
  if (hours < 10) {
    const hours = `0${hours}`;
  }
  const minutes = props.date.getMinutes();
  if (minutes < 10) {
    const minutes = `0${hours}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
