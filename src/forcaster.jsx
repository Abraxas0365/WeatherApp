import React, { useEffect, useState } from "react";
import config from "./assets/config.json";

const API_KEY = config.ApiKey;
const CITY = "Marilao";

const useForecast = () => {
  const [forecast, setForecast] = useState({
    tomorrow: [],
    laterDays: [],
  });

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();

        const today = new Date().toISOString().split("T")[0];
        const tomorrowDate = new Date();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        const tomorrowStr = tomorrowDate.toISOString().split("T")[0];

        const tomorrow = [];
        const laterDaysObj = {};

        data.list.forEach(item => {
          const [date, time] = item.dt_txt.split(" ");

          if (date === tomorrowStr) {
            tomorrow.push(item);
          } else if (date !== today) {
            // collect 12:00:00 or fallback
            if (time === "12:00:00") {
              laterDaysObj[date] = item;
            } else if (!laterDaysObj[date]) {
              laterDaysObj[date] = item;
            }
          }
        });

        const laterDays = Object.values(laterDaysObj).slice(0, 4); // 4 days after tomorrow
        setForecast({ tomorrow, laterDays });

        console.log(
            "Fetched forecast for city:", CITY,
            new Date().toLocaleTimeString(),
            data, "for city:", CITY
          );

      } catch (err) {
        console.error("Forecast API error:", err);
      }
    };

    fetchForecast();
  }, []);

  return forecast;
};

export default useForecast;
