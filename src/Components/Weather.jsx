import React, { useEffect, useState } from "react";
import "./Weather.css";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("kolkata");
  const [changeInfo, setChangeInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=94f0ec1dabe7fd9f1436e8da4bcaaea4`
      );
      const data = await response.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const name = data.name;
      const { country, sunset } = data.sys;
      const { speed } = data.wind;

      const myWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        country,
        sunset,
        speed,
      };
      setChangeInfo(myWeatherInfo);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  });

  return (
    <React.Fragment>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..(City)"
            autoFocus
            id="search"
            className="searchTerm"
            autoComplete="off"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      {/* Weather card */}
      <WeatherCard data={changeInfo} />
    </React.Fragment>
  );
};

export default Weather;
