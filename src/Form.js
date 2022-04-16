import React, { useState } from "react";

export default function Form(props) {
  const [city, setCity] = useState(props.defaultCity);

  function handleSubmit(event) {
    event.preventDefault();
    props.onCitySelect(city);
    setCity("");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
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
        value={city}
      />
      <input className="search" type="submit" value="🔍" />

      <input
        className="current-location"
        type="submit"
        value="current location  📍"
      />
    </form>
  );
}
