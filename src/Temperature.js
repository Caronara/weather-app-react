import React, { useState } from "react";

export default function Temperature(props) {
  

  function convertToFahrenheit(event) {
    event.preventDefault();
    props.onUnitChange("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    props.onUnitChange("celsius");
  }

  if (props.unit === `celsius`) {
    return (
      <span>
        <span className="temperature"> {Math.round(props.celsius)} </span>
        <span className="units">
          <button className="celsius-link link-inactive"> °C </button> |
          <button className="fahrenheit-link" onClick={convertToFahrenheit}>
            °F{" "}
          </button>
        </span>
      </span>
    );
  } else {
    let fahrenheit = props.celsius * 1.8 + 32;

    return (
      <span>
        <span className="temperature"> {Math.round(fahrenheit)} </span>
        <span className="units">
          <button className="celsius-link " onClick={convertToCelsius}>
            {" "}
            °C{" "}
          </button>{" "}
          |<button className="fahrenheit-link link-inactive">°F </button>
        </span>
      </span>
    );
  }
}
