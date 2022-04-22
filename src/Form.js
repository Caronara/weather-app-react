import React, { useState } from "react";
import axios from "axios";

export default function Form(props) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.onCitySelect(inputValue);
    setInputValue("");
  }

  function handleCityChange(event) {
    setInputValue(event.target.value);
  }

  function handleCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(async function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
      const apiData = await axios.get(apiUrl);
      props.onCitySelect(apiData.data.locality);
      console.log(apiData.data.locality);
    });
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        id="search-input"
        className="input"
        type="search"
        placeholder="Enter a city"
        autoComplete="off"
        autoFocus
        onChange={handleCityChange}
        value={inputValue}
      />
      <input className="search" type="submit" value="🔍" />

      <input
        className="current-location"
        type="submit"
        value="current location  📍"
        onClick={handleCurrentLocation}
      />
    </form>
  );
}
