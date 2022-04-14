import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      day: "Sunday",
      time: "17:00",
    });

    
  }

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
              <span> {weatherData.day}</span>{" "}
              <span className="time">{weatherData.time}</span>
            </div>

            <div className="weather-emoji">☀</div>

            <h2>
              <span className="temperature">
                {" "}
                {Math.round(weatherData.temperature)}{" "}
              </span>
              <span className="units">
                <button className="celsius-link link-inactive"> °C </button> |
                <button className="fahrenheit-link">°F </button>
              </span>
            </h2>

            <p className="current-weather text-capitalize">
              {weatherData.description}
            </p>
          </div>
        </div>

        <hr />
      </div>
    );
  } else {
    const apiKey = "9c55ea90da683c1de40704337e5e7c02";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
