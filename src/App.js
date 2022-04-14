import "./App.css";
import Form from "./Form";
import "./Form.css";
import Weather from "./Weather";
import "./Weather.css";
import Forecast from "./Forecast";
import "./Forecast.css";
import Footer from "./Footer";
import "./Footer.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <Form />
          <Weather defaultCity="Vienna" />
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
