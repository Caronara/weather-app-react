import React from "react";

export default function () {
  return (
    <form className="Form">
      <input
        id="search-input"
        className="input"
        type="search"
        placeholder="Enter a city"
        autoComplete="off"
        autoFocus
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
