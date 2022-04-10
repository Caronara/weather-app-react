import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import "./Form.css";
import Weather from "./Weather";
import "./Weather.css";
import Forecast from "./Forecast";
import "./Forecast.css";
import Footer from "./Footer";
import "./Footer.css";

function App() {
  return (
    <div>
      <div className="App">
        <Form />
        <Weather />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
