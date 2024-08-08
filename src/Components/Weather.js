import React, { useEffect, useState } from "react";
import cloud2 from "../images/cloud2.png";
import cloud from "../images/cloud.png";

function Weather() {

  const [weather, setWeather] = useState({});
    async function getdata(){
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=london&id=524901&units=metric&appid=3e43c3d8b684e8223c23a336c725a765");
        const data = await response.json();
        console.log(data);
        setWeather(data);
    }

    useEffect(() => {
        getdata();
      }, []);


  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="left-container">
          <div>
          <h1 className="locationName">{weather.name}</h1>
          <h3 className="countryCode">{weather.sys?.country}</h3>
          </div>

          <div className="temp-container">
            <div>
              <h1 className="time">Time</h1>
              <h1 className="date">Date</h1>
            </div>
            <div>
              <h1 className="temp">{weather.main?.temp}°C</h1>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="main-cloud">
            <img src={cloud2} alt="cloud2" />
          </div>

          <div className="right-element">
            <h1>{weather.weather?.[0]?.main}</h1>
            <img src={cloud} alt="cloud" />
          </div>

          <div className="right-element2">
            <input
              type="search"
              placeholder="Search city.."
              className="search"
            />
            <h3>{weather.weather?.[0]?.description}</h3>
          </div>

          <div className="right-items">
            <p>Feels like<span>{weather.main?.feels_like} °F</span>
            </p>
            <p>Humidity <span>{weather.main?.humidity} %</span>
            </p>
            <p>Visibility <span>{weather.visibility}</span>
            </p>
            <p>Wind Speed <span>{weather.wind?.speed} Mph</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
