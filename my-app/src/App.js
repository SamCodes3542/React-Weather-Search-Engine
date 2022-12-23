import "./App.css";
import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1>Georgia</h1>
            <h2 className="weather">Temp</h2>
            <ul className="currentWeatherConditions">
              <li className="date">date</li>
              <li className="time">time</li>
              <li className="currentConditions">current</li>
            </ul>
            <ul className="weatherConditions">
              <li>Humidity: </li>
              <li>Wind: </li>
            </ul>
            <input
              placeholder="Enter a City"
              autoFocus="on"
              className="input"
            />
            <input type="button" value="Search" className="button" />
            <div className="row mt-3">
                <div className="col-2">Mon</div>
                <div className="col-2">Tue</div>
                <div className="col-2">Wed</div>
                <div className="col-2">Thurs</div>
                <div className="col-2">Fri</div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          Open-Source coded on
          <a href="">Github</a>
          By
          <a href=""> Samantha Montgomery</a>
          hosted on
          <a href="">Netlify</a>
        </footer>
      </div>
  );
}

export default App;
