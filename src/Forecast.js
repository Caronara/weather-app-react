import axios from "axios";
import React from "react";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "9c55ea90da683c1de40704337e5e7c02";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="row Forecast">
      <div className="col day">
        <strong>Mon </strong>
        <br />
        🌨
        <br />
        <strong>10°</strong>
        <br />
        -2°
      </div>
    </div>
  );
}
