import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);

  const [loaded, setLoaded] = useState(false);

  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windspeed, setWindSpeed] = useState(null);
  const [apiIcon, setApiIcon] = useState("");

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name=""
        class="search-input"
        id="search-input-form"
        onChange={updateCity}
        placeholder="Input city.."
      />
      <input type="submit" value="Search" class="search-button" />
    </form>
  );

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(true);

    if (city !== null) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6f8ef4575250284954db9f4dfa7a996&units=metric`;
      axios.get(url).then(showWeather);
    }
  }

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWindSpeed(response.data.wind.speed);
    setApiIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {windspeed}km/h</li>
          <li>
            <img src={apiIcon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
