import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import WeatherDate from "./WeatherDate";

export default function App() {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function showResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    });
  }
  if (weatherData.loaded) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h1 className="city"> {weatherData.city} </h1>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                className="icon"
                alt="icon"
              />
              <h2 className="temperature">
                {Math.round(weatherData.temperature)}
              </h2>
              <span className="unit">C</span>
              <div className="text-capitalize">
                <ul className="currentWeatherConditions">
                  <li className="date">
                    <WeatherDate date={weatherData.date} />
                  </li>
                  <li className="descrption">{weatherData.description}</li>
                </ul>
              </div>
              <ul className="weatherConditions">
                <li>
                  Feels Like: {weatherData.feelsLike}
                  <span className="float-left">c</span>{" "}
                </li>
                <li>Humidity: {weatherData.humidity}% </li>
                <li>Wind: {Math.round(weatherData.wind)}km/h</li>
              </ul>
              <input
                placeholder="Enter a City"
                autoFocus="on"
                className="formInput"
              />
              <input type="button" value="Search" className="button" />
              <div className="row">
                <div className="col-2">
                  Mon
                  <br />
                  temp
                  <br />☀
                </div>
                <div className="col-2">
                  Tue
                  <br />
                  temp
                  <br />☀
                </div>
                <div className="col-2">
                  Wed
                  <br />
                  temp
                  <br />☀
                </div>
                <div className="col-2">
                  Thurs
                  <br />
                  temp
                  <br />☀
                </div>
                <div className="col-2">
                  Fri
                  <br />
                  temp
                  <br />☀
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          Open-Source coded on {""}
          <a
            className="gitLink"
            href="https://github.com/SamCodes3542/VIRTUAL-GAMER-WEATHER-APP-PROJECT"
            target="_blank rel=noopener noreferrer"
          >
            Github
          </a>{" "}
          By{" "}
          <a
            className="linkedIn"
            href="https://www.linkedin.com/in/samantha-montgomery-70a68323a/"
            target="_blank rel=noopener noreferrer"
          >
            Samantha Montgomery
          </a>{" "}
          hosted on{" "}
          <a
            className="netlifyLink"
            href="netlify.com"
            target="_blank rel=noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    let city = "Paris";
    const apiKey = "094b50c9907d04014c22a077f5e1062a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);

    return "Loading...";
  }
}
