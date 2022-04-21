import "./App.css";
import Form from "./Form";
import "./Form.css";
import Weather from "./Weather";
import "./Weather.css";
import "./Forecast.css";
import Footer from "./Footer";
import "./Footer.css";
import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("Vienna");

  function handleCitySelect(city) {
    setCity(city);
  }
  return (
    <div>
      <div className="App">
        <div className="container">
          <Form defaultCity={city}  onCitySelect={handleCitySelect} />
          <Weather defaultCity={city} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
