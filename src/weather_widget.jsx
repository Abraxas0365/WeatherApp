import React, { useEffect, useState } from "react";
import config from "./assets/config.json";
import WeatherCommentary from "./WeatherCommentary";

const API_KEY = config.ApiKey;
const CITY = "Marilao";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = () => {
      // console.log("Fetching weather data..."); // refresh checker
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          /*console.log("Weather updated:", data);*/ setWeather(data);
        })
        .catch((err) => console.error("Weather API error:", err));
    };

    fetchWeather(); // initial fetch

    const interval = setInterval(fetchWeather, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 md:left-5 md:translate-x-0 w-[90vw] max-w-md z-10 bg-[#2e2e2e]/30 p-4 rounded-lg backdrop-blur-sm">
        <div className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
          {weather?.main ? (
            <div className="flex flex-col items-start font-bold drop-shadow-2xl">
              <div className="flex flex-col items-center gap-2 self-center">
                <h1 className="text-center flex flex-row items-center gap-2 text-[clamp(2rem,2vw,3rem)] font-mono font-thin">
                  {weather.name}
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt="weather icon"
                    className="w-10 h-10"
                  />
                </h1>
                <h1 className="text-[clamp(4rem,3vw,5.5rem)] font-sans font-thin">
                  {" "}
                  {weather.main.temp}°C{" "}
                </h1>
              </div>
              <div className="flex flex-row lg:flex-row justify-between w-full text-[clamp(1rem, 2vw, 1.5rem)] font-normal">
                <div className="p-4 sm:p-6 md:p-8">
                  <h1>
                    <strong>Condition</strong>: {weather.weather[0].description}
                  </h1>
                  <h1>
                    <strong>Humidity</strong>: {weather.main.humidity}%
                  </h1>
                  <h1>
                    <strong>Feels like</strong>: {weather.main.feels_like}°C
                  </h1>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <h1>
                    <strong>Wind Speed</strong>: {weather.wind.speed} m/s
                  </h1>
                  <h1>
                    <strong>Visibility</strong>: {weather.visibility / 1000} km
                  </h1>
                  <h1>
                    <strong>Cloudiness</strong>: {weather.clouds.all}%
                  </h1>
                </div>
              </div>
              <div>
                <WeatherCommentary weather={weather} />
              </div>
            </div>
          ) : (
            <h1 className="font-bold animate-pulse drop-shadow-2xl">
              Loading...
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
