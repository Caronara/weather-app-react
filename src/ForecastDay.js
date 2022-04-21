import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function roundMaxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function roundMinTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <strong>{day()}</strong>
      <br />
      <img
        className="icon"
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt=""
      />
      <br />
      <strong>{roundMaxTemperature()}</strong>
      <br />
      {roundMinTemperature()}
    </div>
  );
}
