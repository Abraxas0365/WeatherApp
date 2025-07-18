import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Background from "./background";
import Weather from "./weather_widget";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="relative min-h-screen">
      <Background />
      <Weather />
    </div>
  </StrictMode>
);
