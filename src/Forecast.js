import axios from "axios";
import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  function load() {
    const apiKey = "9c55ea90da683c1de40704337e5e7c02";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="row Forecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col day" key={index}>
                <ForecastDay
                  data={dailyForecast}
                  unit={props.unit}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}
