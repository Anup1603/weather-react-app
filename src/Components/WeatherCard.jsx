import React, { useEffect, useState } from "react";

const WeatherCard = ({ data }) => {
  const [weatherState, setWeatherState] = useState();

  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    country,
    sunset,
    speed,
  } = data;

  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-showers");

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherMood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()} : ${date.getMinutes()}`;

  return (
    <React.Fragment>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{`${temp}°`}</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">{`${name}, ${country}`}</div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>

        {/* Our 4 coloum section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {`${timeStr}`} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {`${humidity}`}
                <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {`${pressure}`} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {`${speed}`} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default WeatherCard;
