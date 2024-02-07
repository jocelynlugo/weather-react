import React from "react";
import "./styles.css";

export default function Main() {
  return (
    <div className="Main">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
      <div class="weather-app">
        <div class="weather-data">
          <h1 id="city">Newark</h1>
          <h2 id="current-temperature">47°F</h2>
          <div class="weather-details">
            <p>
              <div class="descrip" id="description">
                Sunny
              </div>
              <div id="icon">☀️</div>
            </p>
            <p>
              <span id="humidity">Humidity 55%</span>
              <br />
              <span id="wind-speed"> Winds 13 MPH </span>
            </p>
          </div>
          <section class="week-weather">
            <ul>
              <li class="day 1">
                <div class="container text-center">
                  <div class="row align-items-start">
                    <div class="col-4">Wednesday</div>
                    <div class="col-4">☁️</div>
                    <div class="col-4">47° | 70°</div>
                  </div>
                </div>
              </li>
              <li class="day 2">
                <div class="container text-center">
                  <div class="row align-items-start">
                    <div class="col-4">Thursday</div>
                    <div class="col-4">⛅</div>
                    <div class="col-4">52° | 76°</div>
                  </div>
                </div>
              </li>
              <li class="day 3">
                <div class="container text-center">
                  <div class="row align-items-start">
                    <div class="col-4">Friday</div>
                    <div class="col-4">☀️</div>
                    <div class="col-4">56° | 76°</div>
                  </div>
                </div>
              </li>
              <li class="day 4">
                <div class="container text-center">
                  <div class="row align-items-start">
                    <div class="col-4">Saturday</div>
                    <div class="col-4">☀️</div>
                    <div class="col-4">59° | 80°</div>
                  </div>
                </div>
              </li>
              <li class="day 5">
                <div class="container text-center">
                  <div class="row align-items-start">
                    <div class="col-4">Sunday</div>
                    <div class="col-4">☁️</div>
                    <div class="col-4">55° | 68°</div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div class="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
