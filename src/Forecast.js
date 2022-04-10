import React from "react";

export default function () {
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
      <div className="col day">
        <strong>Tue </strong>
        <br />☁<br />
        <strong>12°</strong>
        <br />
        0°
      </div>
      <div className="col day">
        <strong>Wed</strong>
        <br />⛅<br />
        <strong>16°</strong>
        <br />
        1°
      </div>
      <div className="col day">
        <strong>Thu</strong>
        <br />⛅<br />
        <strong>18°</strong>
        <br />
        2°
      </div>
      <div className="col day">
        <strong>Fri</strong>
        <br />⛅<br />
        <strong>15°</strong>
        <br />
        0°
      </div>
    </div>
  );
}
