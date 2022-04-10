import React from "react";

export default function () {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <p className="precipitation-wind">
            <span className="precipitation">Humidity: 90% </span>
            <br />
            <span className="wind">
              Wind: 16 <span className="wind-unit">km/h</span>
            </span>
          </p>
        </div>
        <div className="col">
          <h1 id="city">Vienna</h1>

          <div className="currentDate">
            <span> Sunday</span> <span className="time">16:00 </span>
          </div>

          <div className="weather-emoji">☀</div>

          <h2>
            <span className="temperature"> 12 </span>
            <span className="units">
              <a href="#" className="celsius-link link-inactive">
                {" "}
                °C{" "}
              </a>{" "}
              |
              <a href="#" className="fahrenheit-link">
                °F{" "}
              </a>
            </span>
          </h2>

          <p className="current-weather">Clear</p>
        </div>
      </div>

      <hr />
    </div>
  );
}
