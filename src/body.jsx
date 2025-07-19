import React, {useEffect, useState } from "react";
import Weatherwidget from "./weather_widget";
import ForecastWidget from "./forecast_widget";

const Body = () => {
  const [activeTab, setActiveTab] = useState("current");

  const handleSwitch = (view) => {
    setActiveTab(view);
  };

  return (
    <>
        {/* Toggle Switch */}
      <div className="relative flex justify-center mt-4">
        <div className="relative w-[90vw] max-w-md p-1 rounded-lg bg-gray-700/40 backdrop-blur-sm flex">
          <div
            className={`absolute top-1 bottom-1 w-1/2 bg-white/20 rounded-lg transition-all duration-300 ease-in-out z-0 ${
              activeTab === "forecast" ? "left-[calc(50%-0.25rem)]" : "left-[0.25rem]"
            }`}
          />
          <button
            onClick={() => handleSwitch("current")}
            className={`z-10 w-1/2 py-2 rounded-lg transition-all duration-300 ease-in-out ${
              activeTab === "current"
                ? "text-blue-300 font-semibold"
                : "text-white"
            }`}
          >
            Current Weather
          </button>
          <button
            onClick={() => handleSwitch("forecast")}
            className={`z-10 w-1/2 py-2 rounded-lg transition-all duration-300 ease-in-out ${
              activeTab === "forecast"
                ? "text-green-300 font-semibold"
                : "text-white"
            }`}
          >
            View Forecast
          </button>
        </div>
      </div>

      {/* Card Switcher */}
      <div className="mt-6 transition-all duration-500 ease-in-out">
        {activeTab === "current" && (
          <div className="animate-fade-in">
            <Weatherwidget />
          </div>
        )}
        {activeTab === "forecast" && (
          <div className="animate-fade-in">
            {/* Replace with your actual forecast card */}
            <ForecastWidget />
          </div>
        )}
      </div>
    </>
  );
}

export default Body;