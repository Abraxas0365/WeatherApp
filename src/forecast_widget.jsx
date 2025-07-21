import React, { useEffect, useState } from "react";
import useForecast from "./forcaster";

const ForecastWidget = () => {
  const { tomorrow, laterDays } = useForecast();

  return (
    <>
  <section className="text-white text-[clamp(1rem,1.5vw,3rem)] w-[90vw] justify-self-center z-10 bg-[#2e2e2e]/30 p-4 rounded-lg backdrop-blur-sm">
    {/* TOMORROW - Detailed Forecast */}
    <div className="mb-6">
      <h2 className="text-[clamp(2rem,2vw,3rem)] font-semibold mb-4 border-b border-white/20">Tomorrow {tomorrow[0]?.dt_txt.split(" ")[0]}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-2 p-2 sm:p4 md:p-6">
        {tomorrow.map((item, i) => {
          const [hour, minute] = item.dt_txt.split(" ")[1].split(":");
          return (
            <div
              key={i}
              className="bg-white/10 p-4 rounded-lg text-center shadow hover:bg-white/20 transition relative flex-col justify-self-center items-center gap-2 w-[90vw] max-w-full" 
            >
              <h3 className="font-bold text-[clamp(2rem, 2vw, 3rem)] h-fit place-self-start">{hour}:{minute}</h3>
              <p>Temperature: {item.main.temp}°C</p>
              <p className="capitalize">Condition: {item.weather[0].description}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="weather icon"
                className="w-full h-fit justify-self-center"
              />
            </div>
          );
        })}
      </div>
    </div>

    {/* LATER DAYS - Summary Forecast */}
    <div>
      <h2 className="text-[clamp(2rem,2vw,3rem)] font-semibold mb-4 border-b border-white/20">Later Days</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  p-2 sm:p4 md:p-6">
        {laterDays.map((item, i) => (
          <div
            key={i}
            className="bg-white/10 p-4 rounded-lg text-center shadow hover:bg-white/20 transition"
          >
            <h3 className="font-bold text-[clamp(1rem, 2vw, 3rem)]">{item.dt_txt.split(" ")[0]}</h3>
            <p>Temperature: {item.main.temp}°C</p>
            <p>Condition: {item.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
</>
  );
};

export default ForecastWidget;
