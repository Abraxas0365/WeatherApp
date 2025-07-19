import React, { useEffect, useState } from "react";
import useWeather from "./weatherfetcher";
import WeatherCommentary from "./WeatherCommentary";

const Weatherwidget = () => {
  const weather = useWeather();

  function getWindDirection(deg) {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    const index = Math.round(deg / 22.5) % 16;
    return directions[index];
  }

  return (
    <>
      <section className="text-white text-[clamp(1rem,1.7vw,3rem)] w-[90vw] justify-self-center z-10 bg-[#2e2e2e]/30 p-4 rounded-lg backdrop-blur-sm">
        {weather?.main ? (
          // top section with weather info
          <div className="flex flex-col md:flex-row md:items-start gap-6 w-full">
            <div className="flex-1">
              <div className="flex flex-col items-center gap-2 self-center">
                <h1 className="text-center flex flex-row items-center gap-2 text-[clamp(2rem,2vw,3rem)] font-mono font-thin tracking-wide">
                  {weather.name}
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt="weather icon"
                    className="w-10 h-10"
                  />
                </h1>
                <h1 className="text-[clamp(4rem,3vw,5.5rem)] font-sans font-thin">
                  {weather.main.temp}°C
                </h1>
              </div>
              {/* Additional info division */}
              <div className="flex flex-row justify-between w-full text-[clamp(1rem, 2vw, 1.5rem)] font-normal">
                {/* left side */}
                <div className="p-4 sm:p-6 md:p-8 ">
                  <h1>
                    <strong>Condition</strong>: {weather.weather[0].description}
                  </h1>
                  <h1>
                    <strong>Humidity</strong>: {weather.main.humidity}%
                  </h1>
                  <h1>
                    <strong>Feels like</strong>: {weather.main.feels_like}°C
                  </h1>
                  <h1>
                    <strong>Visibility</strong>: {weather.visibility / 1000} km
                  </h1>
                </div>
                {/* right side */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h1>
                    <strong>Cloudiness</strong>: {weather.clouds.all}%
                  </h1>
                  <h1>
                    <strong>Wind Speed</strong>: {" "} {weather.wind.speed} m/s
                  </h1>
                  <h1>
                    <strong>Wind Direction</strong>:{" "}
                    {getWindDirection(weather.wind.deg)} ({weather.wind.deg}°)
                  </h1>
                </div>
              </div>
            </div>

            {/* weather commentary division */}
            <div className="flex-1 p-8 md:pt-16 ">
              <WeatherCommentary weather={weather} />
            </div>
          </div>
        ) : (
          <h1 className="font-bold animate-pulse drop-shadow-2xl">
            Loading...
          </h1>
        )}
      </section>
    </>
  );
};

export default Weatherwidget;
