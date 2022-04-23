import React, { useEffect, useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import { CircularProgress } from "@mui/material";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coordinates: response.data.coord,
    });
  }

  useEffect(
    function () {
      setWeatherData({ ready: false });
    },
    [props.defaultCity]
  );

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <p className="precipitation-wind">
              <span className="precipitation">
                Humidity: {weatherData.humidity}%{" "}
              </span>
              <br />
              <span className="wind">
                Wind: {weatherData.wind} <span className="wind-unit">km/h</span>
              </span>
            </p>
          </div>
          <div className="col">
            <h1 id="city">{weatherData.city}</h1>

            <div className="currentDate">
              <span>
                {" "}
                <FormattedDate date={weatherData.date} />
              </span>
            </div>

            <div className="weather-emoji">
              <img src={weatherData.icon} alt="" />
            </div>

            <h2>
              <Temperature
                celsius={weatherData.temperature}
                unit={props.unit}
                onUnitChange={props.onUnitChange}
              />
            </h2>

            <p className="current-weather text-capitalize">
              {weatherData.description}
            </p>
          </div>
        </div>

        <hr />
        <Forecast
          coordinates={weatherData.coordinates}
          unit={props.unit}
          onUnitChange={props.onUnitChange}
        />
      </div>
    );
  } else {
    const apiKey = "9c55ea90da683c1de40704337e5e7c02";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="loading">
        <CircularProgress />
        <div>Enter a city</div>
      </div>
    );
  }
}
