import React, {useEffect, useState} from "react";
import config from "./assets/config.json";

const API_KEY = config.ApiKey;
const CITY = "Marilao";

const useWeather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = () => {
      console.log("Fetching weather data..."); // refresh checker
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(
            "Weather updated at",
            new Date().toLocaleTimeString(),
            data
          );
          setWeather(data);
        })
        .catch((err) => console.error("Weather API error:", err));
    };

    fetchWeather(); // initial fetch

    // const interval = setInterval(fetchWeather, 10 * 1000); // every 3 seconds

    // return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return weather;
    
};
    export default useWeather;

