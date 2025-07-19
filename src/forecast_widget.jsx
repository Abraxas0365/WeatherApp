import React, {useEffect, useState } from "react";

const ForecastWidget = () => {
  const [forecastData, setForecastData] = useState([
    { day: "Monday", temp: "22°C", condition: "Sunny" },
    { day: "Tuesday", temp: "20°C", condition: "Cloudy" },
    { day: "Wednesday", temp: "18°C", condition: "Rainy" },
    { day: "Thursday", temp: "21°C", condition: "Sunny" },
    { day: "Friday", temp: "19°C", condition: "Windy" },
  ]);

  return (
    <div className="p-4 bg-green-800/20 rounded-xl text-white">
      <h2 className="text-lg font-semibold mb-4">Weekly Forecast</h2>
      <ul>
        {forecastData.map((day, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{day.day}: </span>
            <span>{day.temp}, </span>
            <span>{day.condition}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ForecastWidget;